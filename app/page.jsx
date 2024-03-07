"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function home (){

    const router = useRouter();
    const linkToThread = () => {
      router.push("/thread")
    };
    const linkToEvent= () => {
      router.push("/event");
    };const linkToInformation = () => {
      router.push("/information")
    };
    
  

  return (
    <main style={{paddingTop:"20vh"}}>
      <p style={{textAlign: "center",fontSize: "40px"}}>ホーム画面｜HOME</p>
      <div style={{backgroundColor : "rgba(255, 255, 255, 1)",
                   width: "90%",
                   height: "400px",
                   margin:"auto",
                   textAlign: "center",
                   fontSize:"40px",
                   }}>
        <Button onClick={linkToThread} variant="contained" color="warning" sx={{marginTop:"50px",marginBottom:"10%",marginLeft:"2%",marginRight: "2%" ,width:"30%",height: "300px",fontSize:"40px"}}>子育て<br></br>掲示板</Button>
        <Button onClick={linkToEvent} variant="contained" color="warning" sx={{marginTop:"50px",marginBottom:"10%",marginRight: "2%" ,width:"30%",height: "300px",fontSize:"40px"}}>イベント<br></br>情報</Button>
        <Button onClick={linkToInformation} variant="contained" color="warning" sx={{marginTop:"50px",marginBottom:"10%",marginRight:"2%",width:"30%",height: "300px",fontSize:"40px"}}>子育て<br></br>支援情報</Button>
      </div>
    </main>
  )
}