---
name: Technical Lineage
colors:
  surface: '#10141a'
  surface-dim: '#10141a'
  surface-bright: '#353940'
  surface-container-lowest: '#0a0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a31'
  surface-container-highest: '#31353c'
  on-surface: '#dfe2eb'
  on-surface-variant: '#c0c7d4'
  inverse-surface: '#dfe2eb'
  inverse-on-surface: '#2d3137'
  outline: '#8b919d'
  outline-variant: '#414752'
  surface-tint: '#a2c9ff'
  primary: '#a2c9ff'
  on-primary: '#00315c'
  primary-container: '#58a6ff'
  on-primary-container: '#003a6b'
  inverse-primary: '#0060aa'
  secondary: '#7bdb80'
  on-secondary: '#00390e'
  secondary-container: '#007124'
  on-secondary-container: '#91f294'
  tertiary: '#ffba42'
  on-tertiary: '#432c00'
  tertiary-container: '#da9600'
  on-tertiary-container: '#4f3400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004882'
  secondary-fixed: '#97f999'
  secondary-fixed-dim: '#7bdb80'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#005319'
  tertiary-fixed: '#ffddaf'
  tertiary-fixed-dim: '#ffba42'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#614000'
  background: '#10141a'
  on-background: '#dfe2eb'
  surface-variant: '#31353c'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1280px
---

## Brand & Style
The design system is rooted in the "Software-Centric Engineering" aesthetic, prioritizing utility, density, and technical precision. It is designed for an audience that values code as craft—engineers, technical recruiters, and collaborators.

The style is a blend of **Corporate Modern** and **Brutalism-lite**, focusing on a "Border-Heavy" layout. Rather than using shadows to suggest depth, it utilizes high-contrast strokes and structural grid lines to define hierarchy. The interface should feel like a high-end IDE or a robust version-control platform: information-dense, logically structured, and unapologetically technical.

## Colors
The palette is optimized for long-duration technical review, utilizing a "Deep Canvas" approach. 

- **Primary Background (#0d1117):** The foundation for all pages.
- **Surface (#161b22):** Used for "Repository" cards and elevated sections to provide subtle contrast.
- **Border (#30363d):** The primary tool for hierarchy. Every container must be defined by this stroke.
- **Brand Blue (#58a6ff):** Used exclusively for interactive elements like links, primary buttons, and active states.
- **Success Green (#238636):** Reserved for "Contribution" indicators, deployment statuses, and "Open" states.

## Typography
The typography system balances approachable sans-serif headings with highly legible monospaced data.

- **Headings:** Plus Jakarta Sans provides a modern, geometric feel that softens the industrial nature of the layout.
- **Technical Data:** Use JetBrains Mono for all metadata, including file sizes, timestamps, commit hashes, and status labels. 
- **Hierarchy:** Use `label-caps` for section headers or "Overlines" to give the UI an organized, indexed appearance.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop and a high-density vertical stack on mobile. 

- **Grid:** Use a 12-column grid for the main content area. Sidebars should occupy 3 columns (left-aligned) for metadata, with 9 columns for primary content.
- **Density:** Spacing is tight to reflect the "Information-Rich" nature of developer tools. Elements should be separated by 16px (4 units) or 24px (6 units) rather than large, airy gaps.
- **Structural Lines:** Use vertical and horizontal rules (`border_color_hex`) to separate layout sections rather than relying on whitespace alone.

## Elevation & Depth
This design system rejects ambient shadows. Depth is communicated through **Tonal Layering** and **High-Contrast Outlines**.

- **Level 0 (Background):** `#0d1117` for the main page body.
- **Level 1 (Surface):** `#161b22` for cards, modals, and sidebar modules. These must always have a 1px solid border of `#30363d`.
- **Level 2 (Interactive):** On hover, surfaces can transition to a slightly lighter gray or increase border brightness.
- **Focus States:** Use a 2px solid `#58a6ff` outline for keyboard navigation and active input fields.

## Shapes
Shapes are disciplined and functional. 

- **Radius:** A consistent **6px** (Soft-Sharp) radius is applied to all cards, buttons, and inputs. This provides just enough curvature to feel modern without losing the "engineering-tool" edge.
- **Indicators:** Status "dots" (e.g., language indicators) should be perfectly circular.
- **Icons:** Use linear, 1.5px stroke icons (e.g., Lucide or Octicons) to match the border-heavy aesthetic.

## Components
- **Repository Cards:** Surfaces with `#161b22` background, a header link in `primary_color_hex`, and a footer containing `code-sm` metadata (language dot, star count, updated time).
- **Contribution Grid:** A 52-column mini-grid of 10x10px squares. Colors range from the background hex to `success_green` based on intensity.
- **Buttons:** 
  - *Primary:* Solid `#238636` with white text (Action/Commit).
  - *Secondary:* Transparent background with `#30363d` border and `text_primary_hex` labels.
- **Badges/Tags:** Small `code-sm` text inside a rounded-pill with a subtle border. No solid backgrounds unless they represent a specific status.
- **Input Fields:** Darker than the background or matching the surface color, with a constant border. Text should be monospaced for technical inputs.
- **Activity Timeline:** A vertical 2px stroke border on the left, with small circular icons representing "Events" (commits, PRs, milestones) along the line.