#!/usr/bin/env python3
"""Generate placeholder image assets for local development."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

def save_jpeg(path: Path, rgb: tuple[int, int, int], size: tuple[int, int] = (800, 800)) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    try:
        from PIL import Image
        Image.new("RGB", size, rgb).save(path, "JPEG", quality=85)
    except ImportError:
        path.write_bytes(
            bytes([
                0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
                0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xFF, 0xD9,
            ])
        )


def save_png(path: Path, rgb: tuple[int, int, int], size: tuple[int, int]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    try:
        from PIL import Image
        Image.new("RGB", size, rgb).save(path, "PNG")
    except ImportError:
        path.write_bytes(
            b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01"
            b"\x08\x02\x00\x00\x00\x90wS\xde\x00\x00\x00\x0cIDATx\x9cc\xf8\x0f\x00"
            b"\x00\x01\x01\x00\x05\x18\xd8N\x00\x00\x00\x00IEND\xaeB`\x82"
        )


def main() -> None:
    images = ROOT / "public" / "images"
    colors = {
        "hero-logo-atmosphere.jpg": (12, 10, 28),
        "about-reflection.jpg": (30, 25, 55),
        "born-to-feel-loved.jpg": (180, 60, 120),
        "dance-with-you.jpg": (60, 140, 200),
        "moment-in-time.jpg": (90, 70, 160),
        "o-yeah.jpg": (220, 140, 40),
        "your-touch.jpg": (140, 50, 90),
    }
    for name, rgb in colors.items():
        save_jpeg(images / name, rgb)

    previews = ROOT / "public" / "previews"
    for name in [
        "desktop-home-mockup.png",
        "desktop-overlay-mockup.png",
        "mobile-home-mockup.png",
        "mobile-overlay-mockup.png",
    ]:
        desktop = "desktop" in name
        home = "home" in name
        size = (1280, 720) if desktop else (390, 844)
        color = (20, 18, 40) if home else (35, 30, 65)
        save_png(previews / name, color, size)

    print("Placeholder assets generated.")


if __name__ == "__main__":
    main()
