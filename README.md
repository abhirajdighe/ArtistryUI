# ArtistryUI

## Description
ArtistryUI is a professionally developed frontend for an art showcase platform built with React.js and Tailwind CSS. The application features a responsive, user-friendly interface for browsing artworks, with Firebase integration for secure user authentication. The design emphasizes seamless navigation and an optimized user experience.

## Technologies
This project utilizes the following technologies:

- **React.js**  
  A powerful JavaScript library for building user interfaces.  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React.js" height="50"/>

- **Tailwind CSS**  
  A utility-first CSS framework that promotes efficient styling through predefined classes.  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" height="50"/>

- **Firebase**  
  A comprehensive platform providing backend services for application development.  
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" alt="Firebase" height="50"/>

## Features
- Responsive design using Tailwind CSS
- User authentication with Firebase
- Easy navigation for exploring artworks
- Integration with Firestore for data management

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/ArtistryUI.git

2. Navigate to the project directory:
    cd ArtistryUI
3. Install the necessary dependencies:
    npm install
4. Start the development server:
    npm start

## Firebase Setup
### Create a **firebase.js** file in the src directory with the following code structure:

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

```json
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

- Make sure to replace the Firebase configuration with your project's specific settings.

## Acknowledgements

- **React.js**: A powerful JavaScript library for building user interfaces, which facilitates the development of reusable UI components. [React.js](https://reactjs.org/)
- **Tailwind CSS**: A utility-first CSS framework that promotes efficient styling through predefined classes, enhancing design consistency. [Tailwind CSS](https://tailwindcss.com/)
- **Firebase**: A comprehensive platform providing backend services, including authentication and Firestore, to streamline application development. [Firebase](https://firebase.google.com/)
- **Vercel**: A deployment platform that enables seamless hosting and scaling of frontend applications. [Vercel](https://vercel.com/)
- **Open Source Community**: Acknowledgment of the developers and contributors who provide invaluable resources and libraries that advance web development practices.

## Project Images
Here are some screenshots of the application:

![Project Image 1](https://github.com/abhirajdighe/ArtistryUI/blob/main/assets/image%201.png)
![Project Image 2](https://github.com/abhirajdighe/ArtistryUI/blob/main/assets/image%202.png)
