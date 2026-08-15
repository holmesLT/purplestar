#!/usr/bin/env python3
"""
Generate OG image (1200x630 PNG) for PurpleStar social sharing.

Output: public/og-image.png
"""

from PIL import Image, ImageDraw, ImageFont
import os

# ============================================================
# Brand colors (matching tailwind.config.ts)
# ============================================================
COLOR_BG_TOP = (26, 14, 46)       # imperial-purple/40 darker
COLOR_BG_BOTTOM = (15, 8, 28)     # near black
COLOR_GOLD = (212, 175, 55)      # imperial-gold
COLOR_PARCHMENT = (245, 235, 220) # imperial-parchment
COLOR_GOLD_SOFT = (180, 140, 50)

WIDTH = 1200
HEIGHT = 630

# ============================================================
# Create gradient background
# ============================================================
img = Image.new('RGB', (WIDTH, HEIGHT), COLOR_BG_BOTTOM)
draw = ImageDraw.Draw(img)

# Vertical gradient
for y in range(HEIGHT):
    ratio = y / HEIGHT
    r = int(COLOR_BG_TOP[0] * (1 - ratio) + COLOR_BG_BOTTOM[0] * ratio)
    g = int(COLOR_BG_TOP[1] * (1 - ratio) + COLOR_BG_BOTTOM[1] * ratio)
    b = int(COLOR_BG_TOP[2] * (1 - ratio) + COLOR_BG_BOTTOM[2] * ratio)
    draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

# Decorative gold borders (top + bottom)
border_thickness = 4
draw.rectangle([(0, 0), (WIDTH, border_thickness)], fill=COLOR_GOLD)
draw.rectangle([(0, HEIGHT - border_thickness), (WIDTH, HEIGHT)], fill=COLOR_GOLD)

# Corner ornaments (simple gold squares)
ornament_size = 30
ornament_padding = 40
for x, y in [
    (ornament_padding, ornament_padding),
    (WIDTH - ornament_padding - ornament_size, ornament_padding),
    (ornament_padding, HEIGHT - ornament_padding - ornament_size),
    (WIDTH - ornament_padding - ornament_size, HEIGHT - ornament_padding - ornament_size),
]:
    draw.rectangle([(x, y), (x + ornament_size, y + ornament_size)], outline=COLOR_GOLD, width=2)

# ============================================================
# Try to load fonts
# ============================================================
def load_font(size, bold=False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/System/Library/Fonts/Supplemental/Georgia.ttf" if not bold else "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()

font_small = load_font(20)         # tracking
font_brand = load_font(72, bold=True)
font_title = load_font(56, bold=True)
font_subtitle = load_font(28)
font_footer = load_font(22)

# ============================================================
# Centered content
# ============================================================
def center_x(text_width):
    return (WIDTH - text_width) // 2

# Brand mark (top)
brand_text = "PURPLESTAR · 紫微斗数"
brand_bbox = draw.textbbox((0, 0), brand_text, font=font_small)
brand_w = brand_bbox[2] - brand_bbox[0]
draw.text((center_x(brand_w), 90), brand_text, fill=COLOR_GOLD_SOFT, font=font_small)

# Decorative line under brand
line_y = 130
draw.line([(WIDTH // 2 - 80, line_y), (WIDTH // 2 + 80, line_y)], fill=COLOR_GOLD, width=2)

# Main title
title_lines = ["Your Destiny,", "Written in the Stars", "of the East"]
title_y = 180
for line in title_lines:
    bbox = draw.textbbox((0, 0), line, font=font_title)
    line_w = bbox[2] - bbox[0]
    color = COLOR_PARCHMENT if "Stars" not in line else COLOR_GOLD
    draw.text((center_x(line_w), title_y), line, fill=color, font=font_title)
    title_y += 72

# Subtitle
subtitle_text = "The Most Sophisticated Chinese Birth Chart System"
bbox = draw.textbbox((0, 0), subtitle_text, font=font_subtitle)
sub_w = bbox[2] - bbox[0]
draw.text((center_x(sub_w), 440), subtitle_text, fill=COLOR_PARCHMENT, font=font_subtitle)

subtitle2 = "Free Chart Generator  ·  AI-Powered Readings"
bbox = draw.textbbox((0, 0), subtitle2, font=font_subtitle)
sub2_w = bbox[2] - bbox[0]
draw.text((center_x(sub2_w), 478), subtitle2, fill=COLOR_GOLD_SOFT, font=font_subtitle)

# Footer (URL)
footer_text = "purplestar.cc"
bbox = draw.textbbox((0, 0), footer_text, font=font_footer)
foot_w = bbox[2] - bbox[0]
draw.text((center_x(foot_w), HEIGHT - 70), footer_text, fill=COLOR_GOLD, font=font_footer)

# ============================================================
# Save
# ============================================================
output_path = os.path.join(os.path.dirname(__file__), "..", "public", "og-image.png")
output_path = os.path.abspath(output_path)
img.save(output_path, "PNG", optimize=True)

print(f"✅ OG image generated: {output_path}")
print(f"   Size: {WIDTH}x{HEIGHT}")
print(f"   File size: {os.path.getsize(output_path) // 1024} KB")
