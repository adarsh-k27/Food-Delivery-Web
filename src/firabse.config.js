import {
    getApp,
    getApps,
    initializeApp
} from 'firebase/app'
import {
    getStorage
} from 'firebase/storage';

console.log("api", process.env.REACT_APP_FIREBASE_API_KEY);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDMO7eI-dkwTCTdB-7wFqeP8NSbKuMzYCs",
//     authDomain: "memories-social-media-3da6d.firebaseapp.com",
//     projectId: "memories-social-media-3da6d",
//     storageBucket: "memories-social-media-3da6d.appspot.com",
//     messagingSenderId: "189755624872",
//     appId: "1:189755624872:web:0c03f6ac638bd79e78619d",
//     measurementId: "G-6MJPHB4V78"
// };
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app)

export {
    app,
    storage
};