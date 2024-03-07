"use client"
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function newevent() {

    const[title,setTitle]=useState("")
    const[detail,setDetail]=useState("")

    function handleTitlechange(e){
        setTitle(e.target.value)
    }
    function handleDetailchange(e){
        setDetail(e.target.value)
    }

    const router = useRouter();
    const linkToHome = () => {
      router.push("/")
    };


    return (
        <main>
      <p style={{textAlign: "center",fontSize: "40px"}}>子育て支援情報 投稿フォーム</p>
      <div style={{backgroundColor : "rgba(255, 255, 255, 1)",
                   width: "90%",
                   height: "400px",
                   margin:"auto",
                   textAlign: "center",
                   fontSize:"30px"
                   }}>
            <TextField  
                variant="standard" 
                value={title} 
                label="title"
                onChange={handleTitlechange} 
                sx={{width: "70%" , marginBottom:'10px'}}
                
            /><br></br>
            <TextField  
                fullWidth
                variant="outlined" 
                value={detail} 
                label="detail"
                onChange={handleDetailchange} 
                multiline
                rows={10}
                
                sx={{width: "70%" , marginBottom:'20px'}}
                
            />
            <br></br>
            <div style={{textAlign: "right",marginRight: "10px"}}>
                <Button 
                fullWidth
                color="error"
                variant="contained" 
                
                sx={{
                    width:"150px",
                    fontSize:"20px"
                    }}>投稿する</Button>
            </div>
      </div>
      <div style={{textAlign: "left",marginLeft: "10px",marginTop: "10px"}}>
                <Button 
                fullWidth
                onClick={linkToHome}
                color="success"
                variant="contained" 
                
                
                sx={{
                    width:"180px",
                    fontSize:"20px"
                    }}>←ホームへ戻る</Button>
            </div>


    </main>
    )
}