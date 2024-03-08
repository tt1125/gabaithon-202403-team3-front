"use client"

import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SignupPage from "./SignupPage";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    
    
    const router = useRouter();
    const linkToSignupPage = () => {
        router.push("./signup")
    };

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    const auth = getAuth();
    const doLogin = () => {
      
    
        // Firebaseで用意されているメールアドレスとパスワードでログインするための関数
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            // ログインができたかどうかをわかりやすくするためのアラート
            alert( 'ログインOK!' );
            console.log( user );
          })
          .catch((error) => {
            console.log(error);
          });
      }

    return (
        <main style={{paddingTop:"20vh"}}>
            
                <div>
            <p style={{textAlign: "center",fontSize: "60px"}}>
                ログイン
            </p>
            <div style={{
                textAlign: "center", alignItems:"center",width: "50", justifyContent:"center" ,height: "30px"
            }}>
                <TextField  value={email} onChange={handleEmailChange} label="メールアドレス" sx={{width: "500px", marginBottom:'20px'}}/>
                <br></br>
                <TextField  value={password} onChange={handlePasswordChange}  label="パスワード" sx={{width: "500px" ,marginBottom:"20px"}}/>
                <br></br>
                <Button onClick={linkToSignupPage} variant="outlined" color="warning" sx={{marginRight:"100px"}}>新規作成</Button>
                <Button variant="contained" color="warning" onClick={doLogin}>ログイン</Button>
            </div></div>
            
        </main>
    )
}