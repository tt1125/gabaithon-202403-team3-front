"use client"
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.vaiue);
    }

    return (
        <main style={{paddingTop:"20vh"}}>
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
                <Button variant="outlined" color="warning" sx={{marginRight:"100px"}}>新規作成</Button>
                <Button variant="contained" color="warning" >ログイン</Button>
            </div>
        </main>
    )
}