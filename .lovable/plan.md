

## Problem

The dashboard content area on mobile has `overflow-y-auto` and `overscroll-contain`, but touch scrolling is being captured/blocked by the parent page scroll. When you touch the dashboard on mobile, the main page scrolls instead of the dashboard content scrolling internally. Once the dashboard reaches its bottom, scrolling should then propagate to the main page.

## Plan

### 1. Add JavaScript touch-scroll handling to the dashboard content area

In `src/components/SectionDashboardPreview.tsx`, add a `useEffect` that attaches touch event listeners to the inner scrollable div (line 1474). The logic:

- On `touchstart`: record the starting Y position
- On `touchmove`: if the dashboard content can scroll in the direction the user is swiping, call `e.stopPropagation()` to prevent the main page from scrolling. Only allow propagation when the dashboard is at the top (swiping down) or at the bottom (swiping up).
- Use a `ref` on the scrollable dashboard div to access `scrollTop`, `scrollHeight`, and `clientHeight`.

### 2. Update CSS for reliable mobile scroll containment

On the scrollable div (line 1474), add `touch-action: pan-y` is already there. Additionally ensure the outer container (line 1431) has `overflow: hidden` (already present) and the content div has proper `overscroll-behavior: contain`.

### 3. Mobile-only changes

All JS touch handling will be gated behind the `useIsMobile()` hook — no changes affect desktop behavior.

### Technical Details

- Add a `ref` to the inner scroll container (line 1474)
- Add a `useEffect` with `touchstart`/`touchmove` listeners that prevent default only when the dashboard can still scroll internally
- Use `{ passive: false }` on the touchmove listener to allow `preventDefault()`
- Clean up listeners on unmount

