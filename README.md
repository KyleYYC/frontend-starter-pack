
# Frontend Starter Pack

Welcome to the **Frontend Starter Pack**! This project serves as a highly configurable, open-source template for frontend development, providing a reliable foundation with a modern tech stack. Whether you're building a personal project or a professional-grade application, this template has you covered with essential tools and configuration.

## Project Overview

- **Project Name**: Frontend Starter Pack
- **Description**: This is an unbranded, open-source, and highly reliable frontend template. It’s designed to be a starting point for building modern websites and applications with a clean and minimal design, giving you the freedom to customize and expand as needed. It includes essential features and configurations to support your development workflow.
- **Tech Stack**: 
  - **Languages**: TypeScript, JavaScript, JSX
  - **Framework**: React 18.x, Vite 5.x
  - **Styling**: Emotion (CSS-in-JS), Material UI
  - **Routing**: React Router
  - **API**: Axios
  - **Utilities**: Lodash, JWT Decode
  - **Testing**: Jest, React Testing Library
  - **Build Tool**: Vite
  - **Linting and Formatting**: ESLint, Prettier

## Features

- **Vite for Fast Development**: Utilizes Vite for instant Hot Module Replacement (HMR) and lightning-fast build times.
- **TypeScript Support**: Strongly-typed development experience.
- **ESLint and Prettier Integration**: For code consistency and linting across the project.
- **Material UI**: Pre-configured with MUI for responsive, accessible UI components.
- **Testing**: Preconfigured with Jest and React Testing Library.
- **Modular File Structure**: Organized with Atomic Design principles for scalability.
- **REST API Ready**: Includes Axios for API integration.

## Project Structure

The project follows a well-structured file organization, designed for scalability and maintainability:

```
src/
┣ assets/             # Static assets such as fonts, images, styles
┃ ┣ fonts/            # Custom fonts
┃ ┣ images/           # Image files
┃ ┃ ┗ common/         # Commonly used images
┃ ┣ styles/           # Global styles
┃ ┗ react.svg         # React logo
┣ components/         # React components organized by atomic design principles
┃ ┣ atoms/            # Smallest, independent UI elements
┃ ┣ molecules/        # Composed of multiple atoms
┃ ┣ organisms/        # Complex, reusable components
┃ ┃ ┗ Header/         # Header component example
┃ ┗ index.ts          # Component exports
┣ contexts/           # React context API for global state management
┣ hooks/              # Custom React hooks
┣ pages/              # Application pages
┣ routes/             # Routing configurations
┣ services/           # API services or business logic
┣ types/              # TypeScript type definitions
┃ ┗ components/       # Component-specific types
┃   ┗ Header.ts       # Type definitions for the Header component
┣ utils/              # Utility functions
┣ __mocks__/          # Mock files for testing
┃ ┗ @mui/
┃   ┗ material/       # Mocks for MUI components
┣ App.tsx             # Main application entry point
┣ main.tsx            # Main file to initialize the app
┣ theme.d.ts          # TypeScript definition for the theme
┣ theme.ts            # Theme configuration
┗ vite-env.d.ts       # Vite environment types
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KyleYYC/frontend-starter-pack.git
   cd frontend-starter-pack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server with Vite's Hot Module Replacement (HMR):

```bash
npm run dev
```

or

```bash
yarn dev
```

Access the development server at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the project for production, use:

```bash
npm run build
```

or

```bash
yarn build
```

This will create an optimized production build in the `dist` folder.

### Running Tests

Run the test suite with Jest:

```bash
npm run test
```

or

```bash
yarn test
```

### Linting and Formatting

- **Lint the project**:

  ```bash
  npm run lint
  ```

  Automatically fix linting errors:

  ```bash
  npm run lint:fix
  ```

- **Format code with Prettier**:

  ```bash
  npm run format
  ```

### Type Checking

You can run TypeScript type checks by using:

```bash
npm run type-check
```

To run it in watch mode:

```bash
npm run type-check:watch
```

## Configuration

### ESLint Configuration

The project uses a customizable ESLint configuration. It’s configured for TypeScript and React, and includes the following plugins:

- **eslint-plugin-react**
- **eslint-plugin-react-hooks**
- **eslint-plugin-react-refresh**

You can expand the ESLint configuration by updating `eslint.config.js` with additional rules or plugins based on your project needs.

### Prettier Configuration

Prettier is set up for consistent code formatting. The configuration file `.prettierrc` includes the rules for formatting styles.

### TypeScript Configuration

The TypeScript configuration is defined in `tsconfig.json` and supports both development and production builds.

## Contributing

We welcome contributions to improve this project! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
