---
name: Kinetic Pipeline
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#00524b'
  on-tertiary: '#ffffff'
  tertiary-container: '#006c63'
  on-tertiary-container: '#81eddf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style
The design system powers an agile CRM and pipeline tracker built to reduce cognitive friction during repetitive follow-up workflows. It serves high-output sales reps, account executives, and relationship managers who navigate between dense relational tables and tactile board views throughout the day. 

The aesthetic marries high-density utilitarian SaaS ergonomics with refined modern minimalism. Interfaces feel airy yet data-rich, avoiding visual ornamentation in favor of purposeful spatial hierarchy, sharp micro-interactions, and clear state transitions. The visual language conveys competence, calm control, and swift execution—turning tedious relationship tracking into a fluid, rewarding workflow. Both English and Thai scripts are treated as first-class citizens, engineered with balanced vertical rhythm and line heights to ensure equal legibility and optical weight across locales.

## Colors
The color architecture relies on a crisp white and slate foundation with high-precision functional status indicators.

- **Primary Canvas & Surfaces:** App workspace background operates on `#F8FAFC`, while cards, elevated panels, and side drawers use pure `#FFFFFF` for clear layering.
- **Brand Accents:** Primary interactions, focus rings, and primary action triggers use Indigo (`#4F46E5`) with an active Blue (`#3B82F6`) for contextual progress and interactive sub-states.
- **Typography & Structural Contrast:** Primary headings and high-priority metrics map to Deep Slate (`#0F172A`). Secondary metadata, card descriptions, and table rows utilize Muted Slate (`#334155`), while placeholding details and timestamps anchor to Light Slate (`#64748B`). Subtle interior strokes and column dividers strictly employ `#E2E8F0`.
- **Status Signal System:** 
  - **New:** Emerald (`#059669` text on `#ECFDF5` surface, `#A7F3D0` stroke).
  - **In Progress:** Amber (`#D97706` text on `#FFFBEB` surface, `#FDE68A` stroke).
  - **Follow-up:** Indigo (`#4F46E5` text on `#EEF2FF` surface, `#C7D2FE` stroke).
  - **Completed:** Slate/Teal (`#0F766E` text on `#F0FDFA` surface, `#99F6E4` stroke).
  - **Overdue / Alert:** Rose (`#E11D48` text on `#FFF1F2` surface, `#FECDD3` stroke).

## Typography
The system uses **Plus Jakarta Sans** for structural headers, primary body text, and board item titles, providing an open, contemporary humanist feel with generous counters. **Inter** is designated for functional UI components, data-heavy tables, column tags, form labels, and badge metadata to maximize cross-browser optical clarity at 11–13px scales.

For full Thai and English bilingual parity, line-height tokens include extra vertical breathing room (minimum 1.5x on body copy) to prevent vowel and tone-mark clipping in complex Thai scripts (such as สระและวรรณยุกต์ซ้อน). Tracking is deliberately expanded by `+0.01em` on micro-labels to prevent optical density collapse in multi-language dashboard grids.

## Layout & Spacing
The layout follows a fluid-hybrid structural model optimized for high screen utilization without cognitive overcrowding:

- **Global Viewport:** The application shell consists of a collapsed/expanded left navigation rail (64px collapsed, 240px expanded), an application toolbar (fixed 56px height), and a horizontal-scrolling Kanban/List container designed to stretch across 100% of the viewport width.
- **Kanban Board Columns:** Columns feature a fixed minimum width of 304px and maximum width of 360px with `gutter` spacing (16px) between lanes. The outer horizontal padding scales from `margin-md` (24px) to `margin-lg` (32px) on ultrawide displays.
- **Data Tables:** Relational views employ a compact 44px row height with a strict 12px column gutter to preserve high scanability across 10+ metadata fields per record.
- **Responsive Adaptations:**
  - **Desktop (>= 1280px):** Multi-column horizontal board layout with simultaneous column scrolling.
  - **Tablet (768px - 1279px):** Horizontal swipeable columns or 2-column stacked layout with collapsible inspector drawers.
  - **Mobile (< 768px):** Segmented tab switcher for pipeline stages; cards render edge-to-edge with `margin` (16px) gutters, full-bleed modals, and bottom action sheets.

## Elevation & Depth
Depth is produced through a layered tonal approach combined with ultra-diffuse ambient shadows and crisp 1px borders. 

- **Level 0 (Canvas Base):** Ground color `#F8FAFC`. Unbordered, unraised.
- **Level 1 (Cards, Static Panels, Table Header):** Background `#FFFFFF`, wrapped in a crisp border (`1px solid #E2E8F0`), supported by a faint drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Active Drag States, Hovered Kanban Cards):** Surfaces translate upward by `1px`, acquiring a slate-tinted ambient halo: `0 8px 16px -4px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)` alongside an accent border tint (`#CBD5E1`).
- **Level 3 (Dropdowns, Popovers, Date Pickers):** Background `#FFFFFF`, border `1px solid #E2E8F0`, with high-def ambient falloff: `0 12px 24px -4px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.04)`.
- **Level 4 (Contact Detail Drawers, Overlays):** Semi-opaque backdrop veil (`rgba(15, 23, 42, 0.35)` with a `backdrop-blur(4px)`) and right-docked sliding panels casting a directional shadow: `-8px 0 24px -6px rgba(15, 23, 42, 0.12)`.

## Shapes
The system utilizes a roundedness factor of `2`, yielding base element radii of 8px (0.5rem), medium cards and panels at 12px, and container modals at 16px (`rounded-xl`). 

- **Cards & Drawers:** 12px (`rounded-xl` spec token) radius on contact tiles, detail side-sheets, and board column background trays.
- **Form Controls & Inputs:** 8px (`rounded-md`) radius for text entries, select triggers, and action buttons.
- **Status Badges & Avatar Pucks:** Strictly full pill (`9999px` / `rounded-full`) geometry to create immediate shape contrast against structural square grid forms.

## Components

### Buttons
- **Primary:** Background `#4F46E5`, text `#FFFFFF`, font `Inter` Medium (13px), padding `8px 16px`, corner radius 8px. Hover state: `#4338CA`. Active state: `#3730A3` with an outer focus ring `3px solid rgba(79, 70, 229, 0.25)`.
- **Secondary / Outline:** Background `#FFFFFF`, text `#334155`, border `1px solid #E2E8F0`. Hover state: `#F8FAFC`, border color `#CBD5E1`.
- **Ghost:** Text `#64748B`, zero-border. Hover state: background `#F1F5F9`, text `#0F172A`.

### Status Badges & Chips
- Designed as compact pills (`height: 22px`, `padding: 2px 8px`). Text uses `label-sm` (11px, weight 600, uppercase or capital case).
- Built with a dual-layer structure: low-saturation tinted background + matching interior border + high-contrast text. Includes an optional 6px circular indicator dot for quick identification.

### Kanban Contact Cards
- Constructed with `#FFFFFF` fill, 12px border-radius, and a subtle border `1px solid #E2E8F0`. 
- Padding: `12px 14px`. Header contains company name and urgency tag; middle row shows lead name and communication channel icon; footer nests the assigned rep avatar (24px circle), next follow-up date, and activity badge.

### Input Fields & Search
- Surface: `#FFFFFF`, border: `1px solid #E2E8F0`, padding: `8px 12px`.
- Placeholder text in `#94A3B8`.
- Focus state: Border transitions to `#4F46E5` with `0 0 0 3px rgba(79, 70, 229, 0.12)`. Error state: Border shifts to `#E11D48` with `0 0 0 3px rgba(225, 29, 72, 0.12)`.

### Checkboxes & Radio Controls
- Checkbox size is 16x16px with a 4px corner radius. Unchecked: `#FFFFFF` fill, `1px solid #CBD5E1`. Checked: `#4F46E5` fill with white SVG checkmark.
- Radio buttons share the 16x16px footprint with a fully rounded contour and centered 6px primary dot when selected.

### Follow-up Timeline Feed
- Continuous vertical axis marked by a 1.5px `#E2E8F0` stroke. Interaction icons (Call, Email, Meeting, Note) are held in 28px circular badges along the spine.
- Timestamps are set in `code-sm` or `body-sm` (`#64748B`) displaying bilingual dates (e.g., "14 ต.ค. / 14 Oct").