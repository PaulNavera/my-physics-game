# Physics Adventure Game

An interactive educational game that teaches physics concepts through engaging gameplay and narrative-driven challenges.

## Features

- **Story Mode**: Experience physics concepts through narrative-driven challenges
  - Game 1: Emergency Divert Challenge (Kinetic Energy & Position)
  - Game 2: Frostfire Cavern Challenge (Temperature & Phase Changes)
- **Encyclopedia**: Deep dive into physics concepts with detailed explanations
- **Progress Tracking**: Monitor your learning progress and achievements
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **User Profile**: Personal profile with progress, achievements, and settings

## Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Emoji icons for simplicity

## Project Structure

```
my-physics-game/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.js       # Navigation header with dark mode, profile, and help
│   │   ├── Hero.js         # Main title and description section
│   │   ├── GameCard.js     # Game option cards with animations
│   │   └── ProgressCard.js # Progress tracking display
│   ├── store/              # State management
│   │   └── gameStore.js    # Zustand store for game state
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page with integrated game menu and progress
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## Page Structure

### Home Page (`/`)

- **Hero Section**: Welcome message and game description
- **Game Options**: Story Mode and Encyclopedia selection with progress indicators
- **Progress Display**: Detailed progress tracking and learning statistics
- **Features Preview**: Brief description of game modes and capabilities
- **Enhanced Header**: Dark/light mode toggle, profile dropdown, and help system

## State Management with Zustand

The game uses Zustand for client-side state management with the following structure:

### Game Store Features

- **Game Progress**: Track completion status and scores for each game
- **UI State**: Manage tutorial visibility, sound settings, and music preferences
- **Persistence**: Automatically saves progress to localStorage
- **Actions**: Functions to start games, complete challenges, and update settings

### Key Store Methods

```javascript
// Start a game
startGame("story-mode" | "encyclopedia");

// Complete a game with score
completeGame("game1", 85);

// Unlock a new game
unlockGame("game2");

// Toggle UI elements
toggleTutorial();
toggleSound();
toggleMusic();

// Reset all progress
resetProgress();
```

## Components

### Header Component

- Displays game logo and title
- **Dark/Light Mode Toggle**: Switch between themes with sun/moon icons
- **Profile Dropdown**: User profile with progress, achievements, settings, and sign out
- **Help/Tutorial Toggle**: Show/hide help information
- Responsive design with smooth animations

### Hero Component

- Main title: "Welcome to the Valley of Velocity"
- Description of the game's educational value
- Animated entrance effects

### GameCard Component

- Reusable card for game options
- Configurable colors, icons, and content
- Hover effects and animations
- Progress indicators for each game

### ProgressCard Component

- Displays current game progress
- Shows completion status and scores
- Learning statistics overview

## Header Features

### Dark/Light Mode Toggle

- **Light Mode**: Default theme with bright colors
- **Dark Mode**: Alternative theme for different preferences
- Smooth transitions between themes
- Icon changes (☀️ for light, 🌙 for dark)

### Profile System

- **User Info**: Display name and level
- **Quick Actions**: Progress, achievements, settings, help
- **Sign Out**: Secure logout functionality
- **Dropdown Menu**: Clean, organized interface

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Development

### Adding New Games

1. Update the `gameProgress` object in `gameStore.js`
2. Add new game logic to the store
3. Create corresponding game components
4. Update the home page to include new game options

### Customizing Styles

- Modify Tailwind classes in component files
- Update color schemes in the Zustand store
- Adjust animations in Framer Motion components
- Implement dark mode styles using CSS variables

### State Persistence

The Zustand store automatically persists:

- Game progress and completion status
- User preferences (sound, music, tutorial)
- Scores and achievements

## Game Concepts

### Game 1: Emergency Divert Challenge

- **Physics Focus**: Kinetic energy, position, and velocity
- **Learning Objective**: Understand how speed affects energy and positioning
- **Gameplay**: Control train speed to navigate challenges and deliver supplies

### Game 2: Frostfire Cavern Challenge

- **Physics Focus**: Temperature, heat transfer, and phase changes
- **Learning Objective**: Learn about temperature effects on matter
- **Gameplay**: Use magic thermometer to balance extreme temperatures

## Contributing

1. Follow the existing component structure
2. Use Zustand for state management
3. Implement responsive design with Tailwind CSS
4. Add smooth animations with Framer Motion
5. Test on different screen sizes
6. Maintain consistent theming for both light and dark modes
7. Ensure profile functionality is secure and user-friendly

## License

This project is for educational purposes and learning physics concepts through interactive gameplay.
