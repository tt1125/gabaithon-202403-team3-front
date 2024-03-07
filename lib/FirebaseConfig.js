import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
    getAuth,
} from "firebase/auth";

// .envファイルで設定した環境変数をfirebaseConfigに入れる
const firebaseConfig = {
    apiKey: "AIzaSyCwggEoZYJpyUOCgEpJCiWVOZgFWw3f6yA",
    authDomain: "gabaithon202403.firebaseapp.com",
    projectId: "gabaithon202403",
    storageBucket: "gabaithon202403.appspot.com",
    messagingSenderId: "754833304105",
    appId: "1:754833304105:web:0768bd545c427901ca8a38",
    measurementId: "G-3S39W755RX"
};

// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述
let firebaseApp = initializeApp(firebaseConfig);
let auth = getAuth();
let firestore = getFirestore();

export { firebaseApp, auth, firestore };
