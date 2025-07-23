# Figma MCP Design System

A comprehensive MUI-inspired design system built with Next.js, TypeScript, and CSS Modules. This project serves as a sandbox for experimenting with how we might leverage Figma's MCP to build and update our Design System.

## 🎨 Design System Components

This design system includes 11 production-ready components:

### Inputs
- **Button** - Contained, outlined, and text variants with full color palette
- **TextField** - Outlined, filled, and standard variants with validation states
- **Checkbox** - With indeterminate state and color variants
- **IconButton** - Circular buttons for icons with hover states
- **Switch** - Toggle component with all semantic colors

### Display
- **Avatar** - Circular/rounded/square with image fallback to initials
- **Badge** - Notification indicators with positioning options
- **Typography** - Complete text hierarchy (H1-H6, body, caption, etc.)

### Feedback
- **Alert** - Success, error, warning, info with multiple variants

### Layout
- **Card** - Content containers with elevation levels and header/content/actions
- **Divider** - Horizontal/vertical dividers with text support

## 🛠 Technical Setup

This project uses React + TypeScript + Next.js with the following features:

- **Next.js 14** with App Router for server-side rendering and routing
- **TypeScript** for comprehensive type safety
- **CSS Modules** for scoped component styling
- **Design Tokens** - All components use CSS variables from globals.css
- **Dark Theme Support** - Full dark mode implementation
- **ESLint** for code quality

## 📁 Project Structure

- `app/` - Next.js app directory containing all code
  - `components/` - Reusable React components organized by category
    - `inputs/` - Form and input components
    - `display/` - Display and data visualization components  
    - `feedback/` - User feedback components
    - `layout/` - Layout and structural components
    - `navigation/` - Navigation components
  - `globals.css` - Global styles and comprehensive design token system
  - `theme/` - Theme showcase and documentation

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🎯 Design Token System

All components leverage a comprehensive design token system including:

- **Color Primitives** - Blues, neutrals, teals, greens, reds, yellows, etc.
- **Semantic Colors** - Background, text, action, alert, tooltip tokens
- **Typography** - Complete font size, line height, and weight system
- **Spacing** - 4px grid system (--space-4 to --space-48)
- **Border Radius** - From square (0px) to pill (999px)
- **Dark Theme** - Full dark mode support via `[data-theme="dark"]`
