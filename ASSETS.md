# Brief aset visual

Semua aset aktif dibuat sebagai aset lokal agar permainan tetap dapat dipakai tanpa koneksi internet. Latar permainan menggunakan `assets/ngarai-clean.webp`; aset karakter dan platform dibuat sebagai SVG/PNG lokal agar tetap tajam dan ringan.

## assets/ngarai-clean.webp

Clean canyon background for the active game scene. The baked-in question card, frog, and gray answer platforms were removed so the live UI can render them independently. The WebP delivery version keeps the same 1697 × 927 composition at a much smaller download size; the original PNG remains in the folder as the source asset.

## assets/frog-128.webp dan assets/frog-256.webp

Compressed 128 × 128 and 256 × 256 start-screen mascot variants derived from `frog.png`. The smaller file is used on narrow screens and the larger file on desktop; the original PNG remains in the folder as the source asset.

## assets/canyon-bg.svg

Wide 16:9 vector game background for a children's Indonesian math game. Semi-realistic friendly cartoon canyon, layered orange-brown rock cliffs on the left and right, dark green pine trees on top, grass edges with tiny flowers, bright blue sky, soft distant clouds, and a darker playable ravine floor in the foreground. Rich gradients, hand-painted edge variation, moderate texture lines, depth and atmospheric perspective. No text, no logo, no watermark, no characters, no answer boards. Keep the center visually open for a question card and jumping frog.

## assets/frog-idle.svg

Original transparent vector game character: one cute friendly green frog, front-facing with oversized expressive eyes, cream belly, small smile, short arms, and bent legs. Thick warm dark-green outline, gentle two-tone shading, child-safe cheerful classroom style. Fully visible, centered, no platform, no background, no text, no logo, no watermark.

## assets/frog-jump.svg

Original transparent vector variant of the same frog character. Green frog with big eyes and cream belly in a joyful mid-air leap, arms and legs spread, matching the idle frog's proportions, palette, outline, and face. No platform, no background, no text, no logo, no watermark.

## assets/frog-jump.png

Transparent raster jumping frog based on the supplied reference image. Used while the player frog is moving between the START platform and an answer platform.

## assets/platform-wood.svg

Original transparent vector answer platform: a small rounded irregular wooden board floating in perspective, warm brown-orange plank surface, darker underside shadow, carved grain lines, soft dark outline, and enough empty center area for an HTML answer label. No letters, no numbers, no frog, no background, no logo, no watermark.

## assets/ngarai-clean.png dan assets/ngarai.webp (sumber)

Source/background variants supplied in the project assets. The game uses `ngarai-clean.webp` behind the question board, answer platforms, frog, and finish sign. It is rendered with `cover` so the scene adapts to touch screens and large IFP displays.

## Audio

`assets/frog-croak.mp3` remains as an optional local sound effect. The game falls back silently when audio is unavailable or disabled.
