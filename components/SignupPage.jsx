"use client"

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

export default function SignupPage() {



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const doRegister = () => {
        const auth = getAuth();

        // Firebaseで用意されているユーザー登録の関数
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // ユーザー登録すると自動的にログインされてuserCredential.userでユーザーの情報を取得できる
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name
                })
                // ユーザー登録ができたかどうかをわかりやすくするためのアラート
                alert('登録完了！');
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <main>
            <div style={{ width: 'full', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "30%", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
                    <p style={{ fontSize: "60px" }}>
                        SignUp
                    </p>
                    <TextField fullWidth value={name} onChange={handleNameChange} label="名前" />
                    <TextField fullWidth value={email} onChange={handleEmailChange} label="メールアドレス" />
                    <TextField fullWidth value={password} onChange={handlePasswordChange} label="パスワード" />
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: "60px" }}>
                        <Button variant="outlined" color="warning" fullWidth >戻る</Button>
                        <Button variant="contained" color="warning" fullWidth onClick={doRegister}>登録</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
