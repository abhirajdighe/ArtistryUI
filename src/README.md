# Step 1:
    
    First make changes in firebase.js / add your firebase project config

    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    };

    add your projects firebaseConfig

# Steo 3: 

    For registration need to make changes in firebase database

    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /users/{userId} {
                allow read, write: if request.auth != null && request.auth.uid == userId;
            }   
        }
    }


# Step 3:
    
    npm install

# Step 4:

    npm start


