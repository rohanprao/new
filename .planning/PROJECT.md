# FactoryOps

A high-end industrial automation and factory operations visualization platform.

## Vision
To provide a premium, real-time visualization of industrial processes, leveraging modern web technologies (React, Three.js, Framer Motion) to deliver a "WOW" factor for factory managers and stakeholders.

## Core Features
- **Real-time Insights**: Dynamic dashboard with live data visualization.
- **Factory Animation**: High-fidelity 3D visualization of factory floor operations.
- **Industrial Robot Flow**: Animated task cycles for autonomous robots.
- **Platform Integration**: Seamless connection with IoT and AWS cloud services.

## Tech Stack
- **Frontend**: React (Vite), TypeScript, Tailwind CSS
- **Animations**: Framer Motion, Three.js (@react-three/fiber, @react-three/drei)
- **UI Components**: Radix UI, Lucide React, Recharts
- **Design System**: Custom premium glassmorphic theme with dark mode priority.

## Scoped Requirements

### Phase 1: Foundation & Setup [MUST]
- [ ] Initialize GSD workflow and project structure.
- [ ] Set up GitHub repository (`rohanprao/new`).
- [ ] Standardize project configuration (package.json, tsconfig).

### Phase 2: UI Standardization [MUST]
- [ ] Enforce design tokens across all components.
- [ ] Standardize navigation and layout constraints.
- [ ] Implement responsive layout fixes for all themes.

### Phase 3: Advanced Visualizations [SHOULD]
- [ ] Enhance FactoryAnimation with more detailed robot movements.
- [ ] Refine RealTimeInsights with interactive data nodes.
- [ ] Optimize 3D perspective and mouse-reactive parallax.

## Out of Scope
- Backend implementation (currently focused on frontend/visualization).
- User authentication (static dashboard for now).
