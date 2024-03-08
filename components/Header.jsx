"use client"

import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const auth = getAuth();
  const user = auth.currentUser;
  const userData = user.providerData
  const name = userData[0].displayName
  
console.log(name)

  const doLogout = () => {


    signOut(auth)
      .then(() => {
        // ログアウトされたことをわかりやすくするためのアラート
        alert('ログアウト完了！');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div style={{ marginTop: "10px" ,position: "fixed", width: '100%', backgroundColor: "rgba(255, 255, 255, 0)", display: "flex", alignItems:"center", justifyContent: "space-between", backgroundColor: "rgba(255, 255, 255, 0)" }}>
      <div><span style={{ marginLeft: "30px", fontSize: "40px" }}>Lulla</span>
        <span>ログイン中：{name}
          </span></div>

      <div style={{ marginRight: "30px", }}>
        <Button variant="contained" color="warning" onClick={doLogout} >ログアウト</Button></div>
    </div>
  )
}