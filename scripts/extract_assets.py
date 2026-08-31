"""One-off asset extraction. Not used at runtime."""
from __future__ import annotations

import hashlib
import struct
import zlib
from pathlib import Path

from PIL import Image
from pypdf import PdfReader
from pypdf.generic import ArrayObject, DictionaryObject, IndirectObject

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "Landing Page Content"
OUT = ROOT / "public" / "images"
APP = ROOT / "app"


def rgb_to_png(rgb: bytes, w: int, h: int, dest: Path) -> None:
    def chunk(tag: bytes, data: bytes) -> bytes:
        crc = zlib.crc32(tag + data) & 0xFFFFFFFF
        return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", crc)

    raw = b"".join(b"\x00" + rgb[y * w * 3 : (y + 1) * w * 3] for y in range(h))
    ihdr = struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0)
    dest.write_bytes(
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", ihdr)
        + chunk(b"IDAT", zlib.compress(raw, 9))
        + chunk(b"IEND", b"")
    )


def walk(obj, seen: set[int], images: list, depth: int = 0) -> None:
    if depth > 25:
        return
    if isinstance(obj, IndirectObject):
        if obj.idnum in seen:
            return
        seen.add(obj.idnum)
        obj = obj.get_object()
    if isinstance(obj, DictionaryObject):
        if obj.get("/Subtype") == "/Image":
            images.append(obj)
        for v in obj.values():
            walk(v, seen, images, depth + 1)
    elif isinstance(obj, (ArrayObject, list)):
        for v in obj:
            walk(v, seen, images, depth + 1)


def collect(pdf: Path) -> list:
    reader = PdfReader(str(pdf))
    seen: set[int] = set()
    images: list = []
    for page in reader.pages:
        walk(page.get_object(), seen, images)
    unique = []
    hashes: set[str] = set()
    for obj in images:
        data = obj.get_data()
        hx = hashlib.md5(data).hexdigest()
        if hx in hashes:
            continue
        hashes.add(hx)
        unique.append((obj, data))
    return unique


def save_jpeg(data: bytes, dest: Path) -> Image.Image:
    dest.write_bytes(data)
    return Image.open(dest).convert("RGB")


def optimize(im: Image.Image, dest: Path, size: tuple[int, int] | None = None, quality: int = 82) -> None:
    if size:
        im = im.copy()
        im.thumbnail(size, Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "WEBP", quality=quality, method=6)
    print(f"wrote {dest.name} {im.size} {dest.stat().st_size // 1024}KB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    deck = SRC / "Heaven Furniture Mart - Company Deck.pdf"
    items = collect(deck)

    for obj, data in items:
        w, h = int(obj.get("/Width")), int(obj.get("/Height"))
        f = str(obj.get("/Filter"))
        print("deck", w, h, f, len(data))
        if w == 500 and h == 500 and f == "/FlateDecode" and len(data) == 750000:
            tmp = OUT / "_logo_raw.png"
            rgb_to_png(data, 500, 500, tmp)
            logo = Image.open(tmp).convert("RGBA")
            # Keep black field — lockup is white/brass on black
            logo.save(OUT / "logo.png", "PNG", optimize=True)
            # Favicon: crop the gold A region (approx center of HEAVEN)
            # HEAVEN is centered; A is the 3rd letter. Crop a square around it.
            mark = logo.crop((175, 145, 325, 325)).resize((256, 256), Image.Resampling.LANCZOS)
            mark.save(APP / "favicon.ico", format="ICO", sizes=[(32, 32), (48, 48), (64, 64), (256, 256)])
            mark.save(OUT / "favicon-256.png", "PNG")
            tmp.unlink()
            print("logo + favicon")
        if w == 810 and h == 457 and f == "/DCTDecode":
            im = save_jpeg(data, OUT / "_md_raw.jpg")
            # Crop speaker: left-center figure
            crop = im.crop((40, 0, 520, 457))
            optimize(crop, OUT / "md.webp", (900, 1100), 84)
            (OUT / "_md_raw.jpg").unlink()
        if w == 1388 and h == 1041 and f == "/DCTDecode":
            im = save_jpeg(data, OUT / "_showroom_raw.jpg")
            # Crop left/center facade; cut discount banner on the right
            crop = im.crop((0, 40, 980, 980))
            optimize(crop, OUT / "showroom.webp", (1400, 1400), 80)
            (OUT / "_showroom_raw.jpg").unlink()

    # Furniture photos
    mapping = [
        ("Classic Furniture Sofa set by Heaven Furniture Mart.jpeg", "hero.webp", (1920, 1440), 78),
        ("Emroiydery Sofa Set Heaven Furniture Mart.jpeg", "living-grey.webp", (1400, 1400), 80),
        ("Luxury Embroidery Sofa Set By Heaven Furniture Mart.jpeg", "living-blue.webp", (1400, 1400), 80),
        ("Minimalist Bed Set by Heaven Furniture Mart.jpeg", "bedroom.webp", (1400, 1600), 80),
        ("Luxury Bed by Heaven Furniture Mart.png", "bedroom-detail.webp", (1400, 1600), 78),
        ("Luxury Dining Table Set.png", "dining.webp", (1400, 1800), 78),
        ("Luxury Dining Set By Heaven Furniture Mart.jpeg", "dining-portrait.webp", (1200, 1600), 80),
        ("Luxury Showcase By Heaven Furniture Mart.jpeg", "craft.webp", (1400, 1400), 80),
        ("Minimal Shoe Box by Heaven Furniture Mart.jpeg", "bespoke-cabinet.webp", (1400, 1400), 80),
    ]
    for src_name, dest_name, size, q in mapping:
        src = SRC / src_name
        im = Image.open(src).convert("RGB")
        optimize(im, OUT / dest_name, size, q)

    print("done")


if __name__ == "__main__":
    main()
