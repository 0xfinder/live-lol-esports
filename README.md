# 📊 Live LoL Esports

Real-time League of Legends esports match tracker with live stats, standings, and game details.

## ✨ Features

- **Live Game Tracking** - Watch live matches with real-time stats updates
- **Multiple Game Support** - Track best-of series with game switching
- **Team Stats** - View kills, gold, dragons, barons, inhibitors, and towers
- **Player Stats** - Individual player statistics and champion info
- **Patch Information** - Current patch version with link to patch notes
- **Series Info** - Best-of format and tournament progression
- **Stream Integration** - Embedded Twitch/YouTube streams with chat support
- **Audio Notifications** - Sound alerts for game events (kills, objectives)
- **Dark Mode** - Built-in dark theme
- **Spoiler Protection** - Stream/chat toggles to avoid spoilers

## 👥 Credits

Forked from [AndyDanger/live-lol-esports](https://github.com/AndyDanger/live-lol-esports)  
Inspired by earlier work from [Aureom](https://github.com/Aureom/live-lol-esports)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://npmjs.com/)

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

Creates optimized production files in `build/` directory.

### Linting

```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

### Formatting

```bash
npm run format:check  # Check formatting
npm run format        # Auto-format code
```

## 🏗️ Architecture

### Framework

- **React 18** - UI components and state management
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Axios** - HTTP requests
- **jQuery** - Legacy DOM manipulation

### Project Structure

```
src/
├── components/
│   ├── Footer/          # Social links footer
│   ├── Match/           # Main match view components
│   │   ├── Game.tsx            # Active game display
│   │   ├── DisabledGame.tsx    # Completed game view
│   │   ├── GameDetails.tsx     # Game metadata
│   │   ├── LiveAPIWatcher.tsx  # Real-time updates
│   │   └── styles/             # Component styles
│   ├── Navbar/          # Navigation and toggles
│   └── Schedule/        # Schedule and event views
├── styles/
│   └── global.css       # Global styles and variables
├── theme/               # Theme context and configurations
├── utils/
│   └── LoLEsportsAPI.ts # API integration
└── types/
    └── baseTypes.ts     # TypeScript interfaces
```

### API Integration

Live data fetched from:
- **Lolesports API** - Match schedules, results, and game metadata
- **Live Stats API** - Real-time game frame data
- **Data Dragon** - Champion and item assets

## 📦 Dependencies

| Dependency | Purpose |
|------------|---------|
| React | UI framework |
| react-router-dom | Routing |
| axios | HTTP client |
| react-toastify | Notifications |
| twitch-player | Twitch embeds |
| use-sound | Audio playback |

## 📄 License

This project is licensed under the GNU General Public License v3.0.

This means:
- You can freely use, modify, and distribute this software
- Any derivative works must also be licensed under GPLv3
- You must disclose source code when distributing

See [LICENSE](LICENSE) for full terms.
