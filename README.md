# Flashcards App

A cross-platform flashcard and subject notes app built with **React Native** and **Supabase**. The app aims to help students learn efficiently using spaced repetition and subject notes in markdown format. This is the Minimum Viable Product (MVP) with plans for future enhancements such as exam simulation, practicals, and continuous progress tracking.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### MVP Features

1. **Subject Notes in Markdown**
   - Render notes in markdown format directly in the app.
   - Organized by subjects and topics.

2. **Flashcards**
   - Flashcards generated from markdown content.
   - Basic Q&A format.
   - Ability to save flashcards for spaced repetition.

### Future Features (Roadmap)

1. **Exam View**
   - Simulate exam scenarios with multiple-choice or short-answer questions.
   - Timed exams with feedback on performance.

2. **Practical Simulations**
   - Interactive practical lessons.
   - Video guides or step-by-step instructions.

3. **Continuous Monitoring**
   - Track user progress with detailed stats and feedback.
   - Spaced repetition algorithm for effective learning.

---

## Technology Stack

- **React Native**: For building a cross-platform mobile app (iOS and Android).
- **Supabase**: Backend services including authentication, real-time database, and storage.
- **Markdown Renderer**: `react-native-markdown-display` for rendering markdown content in the app.
- **State Management**: `Zustand` or `Redux` for managing global state.
- **Data Fetching**: `React Query` for efficient API requests and caching.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) (optional but recommended)
- React Native CLI or Expo (depending on your setup)

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/flashcards-app.git
    cd flashcards-app
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Set up environment variables:

   Create a `.env` file in the root of your project and add your Supabase credentials.

    ```bash
    SUPABASE_URL=your-supabase-url
    SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. Run the app:

    For iOS:
    ```bash
    yarn ios
    ```

    For Android:
    ```bash
    yarn android
    ```

---

## Project Structure

```bash
📦flashcards-app
 ┣ 📂assets         # App assets (images, fonts, etc.)
 ┣ 📂components     # Reusable components (Flashcard, MarkdownViewer, etc.)
 ┣ 📂screens        # Screens for different app views (HomeScreen, FlashcardsScreen, etc.)
 ┣ 📂services       # API calls, Supabase interactions
 ┣ 📂store          # Global state management (using Zustand or Redux)
 ┣ 📂utils          # Utility functions/helpers
 ┣ 📂hooks          # Custom React hooks for data fetching, etc.
 ┣ 📜App.js         # Entry point for the app
 ┣ 📜README.md      # Project documentation
 ┗ 📜.env           # Environment variables

