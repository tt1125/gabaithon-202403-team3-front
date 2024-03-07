"use client"

import { Button } from "@mui/material";
import { useAuth } from '../context/AuthContext'
import { getAuth, signOut } from "firebase/auth";

export default function Header (){

  const auth = getAuth();

  const doLogout = () => {
   

    signOut(auth)
    .then(() => {
      // ログアウトされたことをわかりやすくするためのアラート
      alert( 'ログアウト完了！' );
    })
    .catch((error) => {
      console.log(error);
    });
  }

    return(
         <div style={{position:"fixed",width : '100%' , backgroundColor : "rgba(255, 255, 255, 0)", display : "flex" , textAlign:"center" , justifyContent : "space-between" , backgroundColor : "rgba(255, 255, 255, 0)"}}>
            <span style={{marginLeft : "30px" , fontSize : "40px"}}>Lulla</span>
            <div style={{marginRight : "30px" , marginTop : "10px"}}>
           <Button variant="contained" color="warning" onClick={doLogout} >ログアウト</Button></div>
         </div>
    )
}