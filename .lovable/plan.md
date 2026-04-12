

## Analysis

The current flow:
- **Stage 0→1**: Blur + overlay + "If your business..." text appear
- **Stage 1→2** (after 5s): Text fades, then auto-scrolls down
- **Scroll back up** → `resetToInitial()` sets stage back to 0

**The problem**: When resetting to stage 0, the blur uses `transition: filter 0.3s` (fast), but the overlay uses `opacity 1.5s` and the golden text uses `opacity 2s`. These slow transitions make everything linger when scrolling back up.

**The fix**: Add an `isResetting` state flag. When true, all transitions (blur, overlay, text) use a very short duration (~0.15s) so everything clears instantly. When false (normal forward animation), keep the existing slow, cinematic transitions. This does not affect the 5-second timeout for the text display — that's controlled by the `setTimeout`, not the transition duration.

## Changes

**`src/components/HeroSection.tsx`**:
1. Add `const [isResetting, setIsResetting] = useState(false)` state
2. In `resetToInitial()`, set `isResetting = true` before setting stage to 0, then clear it after a short delay (~200ms)
3. Use `isResetting` to pick transition durations:
   - Blur filter: `isResetting ? '0.15s' : '0.3s'`
   - Overlay opacity: `isResetting ? '0.15s' : '1.5s'`
   - Text opacity: `isResetting ? '0.15s' : '2s'`
4. In the forward animation (stage 0→1), ensure `isResetting` is set to `false`

