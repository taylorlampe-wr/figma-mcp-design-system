# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server  
- `npm run lint` - Run ESLint for code quality

## Project Architecture

This is a Next.js-based design system documentation site using:
- **Next.js 14** with App Router (no src/ folder - all code in app/)
- **TypeScript** for type safety
- **CSS Modules** for component styling
- **Design token system** via CSS variables in globals.css

### Design Token System

The project has a comprehensive design token system in `app/globals.css:1-459`:
- **Color primitives**: Blues, neutrals, teals, greens, reds, yellows, etc.
- **Semantic colors**: Background, text, action, alert, tooltip tokens
- **Dark theme support**: Via `[data-theme="dark"]` attribute
- **Spacing system**: 4px grid system (--space-4 to --space-48)
- **Border radius**: From square (0px) to pill (999px)
- **Typography**: Complete font size, line height, and weight system
- **Utility classes**: For consistent typography across components

### Component Architecture

Components follow this pattern:
- Located in `app/components/` organized by category (inputs, navigation)
- Each component has TypeScript interface with comprehensive props
- CSS Modules for styling with design token references
- Well-documented props with JSDoc comments

Example: `Chip` component at `app/components/inputs/Chip.tsx:1-138` shows:
- Comprehensive prop interface with variants, sizes, states
- Event handling for clicks and deletion
- Proper accessibility (role, tabIndex)
- Modular CSS class composition

### Navigation Structure

The site uses a sidebar navigation system (`app/components/navigation/SideNav.tsx:1-53`) with:
- Sectioned navigation (Foundations, Inputs, etc.)
- Dynamic routing via Next.js Link components
- Structured navigation data for easy expansion

## Design System Implementation Rules

### Component Creation Process
1. Extract design tokens first and add to `app/globals.css`
2. Build components using existing CSS variables
3. Follow existing patterns for props, styling, and documentation
4. Add components to navigation in `SideNav.tsx`

### Styling Guidelines  
- Use CSS Modules exclusively for component styles
- Reference design tokens via CSS variables (e.g., `var(--action-primary)`)
- Follow existing naming conventions for CSS classes
- Maintain consistency with spacing, typography, and color systems

### Code Editing Workflow
When making changes:
- Scope changes to specific files/lines mentioned
- Show implementation plan before making changes
- Wait for "ACK" confirmation before proceeding
- Prefer extending existing patterns over creating new ones
- Never introduce breaking changes without approval
- Reuse existing components and design tokens wherever possible