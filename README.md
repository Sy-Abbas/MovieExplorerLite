# Movie Explorer Lite

**Movie Explorer Lite** is a React Native application developed as part of a technical assessment. The app allows users to browse and search for movies using the TMDB (The Movie Database) API. It features a home screen displaying a list of popular movies, a search functionality to find specific movies, and an optional onboarding screen.

## Project Description

### Features

1. **Onboarding Screens (Optional)**:
   - Visually appealing onboarding screens introducing the core features of the app (e.g., search and browse movies).
   - Potential use of animations or interactive elements to enhance user engagement.

2. **Home Screen**:
   - Displays a list of movies retrieved from the TMDB API.
   - Each movie item showcases the title and a poster image.
   - Includes a search bar at the top for users to search movies by title.

### Public API

- **TMDB API**: [TMDB API Documentation](https://developer.themoviedb.org/docs/getting-started)

## Technical Requirements

1. **React Native CLI**:
   - Use the latest stable version of React Native CLI for project setup (no Expo).

2. **JavaScript**:
   - Write clean, readable, and well-documented JavaScript code.
   - Adhere to established React Native best practices.

3. **API Integration**:
   - Utilize the TMDB API to fetch movie data using JavaScript's fetch API or a library like Axios.
   - Implement a search functionality using the API's search endpoint.
   - Gracefully handle API loading states and potential errors.

4. **State Management**:
   - Manage application state using React's built-in useState hook (no Redux).

5. **UI/UX**:
   - Create an attractive and intuitive user interface for browsing movies, including both the onboarding screens (if applicable) and the home screen.
   - Adhere to best practices for mobile app design to ensure a positive user experience.

## Deliverables

1. **Source Code**:
   - Submit the complete source code of the project on a public GitHub repository.
   - Include a comprehensive README file with setup instructions using React Native.

2. **Screen Recording**:
   - Upload a screen recording of your entire development process as a video file.

3. **Running Application**:
   - Provide a running version of the application built using React Native CLI.

## Evaluation Criteria

1. **Code Quality**:
   - Focus on clean, readable, and well-documented JavaScript code.
   - Adhere to established React Native best practices.

2. **Functionality**:
   - Verify that the application fulfills all features outlined in the project description, including both the onboarding screens (if applicable) and the home screen functionality.
   - Ensure seamless and error-free interaction with the TMDB API.

3. **UI/UX**:
   - Evaluate the overall user interface for attractiveness and user-friendliness across both onboarding screens (if applicable) and the home screen.
   - Consider design consistency and responsiveness across different screen sizes.

4. **Problem Solving**:
   - Assess your ability to handle potential errors and edge cases during development.
   - Evaluate how efficiently you manage the application state using useState.

5. **Communication**:
   - In your screen recording, clearly explain your development process, reasoning behind design decisions (including onboarding screens if applicable), and implemented solutions.

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio (for Android development) or Xcode (for iOS development)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/movie-explorer-lite.git
   cd movie-explorer-lite
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add TMDB API Key**

   Create a `.env` file in the root directory and add your TMDB API key:

   ```plaintext
   TMDB_API_KEY=your_api_key_here
   ```

4. **Start the Metro Server**

   To start Metro, run the following command from the root of your React Native project:

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run the Application**

   Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android or iOS app:

   For Android:

   ```bash
   npm run android
   # or
   yarn android
   ```

   For iOS:

   ```bash
   npx pod-install ios
   npm run ios
   # or
   yarn ios
   ```

6. **Modify the App**

   - Open `App.js` in your text editor of choice and edit some lines.
   - For Android: Press the <kbd>R</kbd> key twice or select "Reload" from the Developer Menu (Ctrl + M (on Windows and Linux) or Cmd ⌘ + M (on macOS)) to see your changes!
   - For iOS: Hit Cmd ⌘ + R in your iOS Simulator to reload the app and see your changes!

## Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an overview of React Native and how to set up your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a guided tour of the React Native basics.
- [TMDB API Documentation](https://developer.themoviedb.org/docs) - learn more about the TMDB API.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native Blog posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source GitHub repository for React Native.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
