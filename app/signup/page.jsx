"use client"

import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function signup () {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <main>
            <div style={{width:'full'  ,display:"flex" ,justifyContent:"center" ,alignItems:"center" }}>
                <div style={{width:"30%",display:"flex" ,flexDirection:"column" ,gap:"20px" , alignItems:"center"}}>
                    <p style={{fontSize:"60px"}}>
                        SignUp
                    </p>
                    <TextField fullWidth value={name} onChange={handleNameChange} label="名前"/>
                    <TextField fullWidth value={email} onChange={handleEmailChange} label="メールアドレス"/>
                    <TextField fullWidth value={password} onChange={handlePasswordChange} label="パスワード"/>
                    <div style={{display : "flex" ,  width:"100%",justifyContent : "space-between" , gap:"60px"}}>
                        <Button variant="outlined" color="warning" fullWidth >戻る</Button>
                        <Button variant="contained" color="warning" fullWidth>登録</Button>
                    </div>
                </div>
            </div>
        </main>
    )}
