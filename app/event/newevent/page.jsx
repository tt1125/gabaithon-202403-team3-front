"use client"
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { getAuth} from "firebase/auth";

export default function newevent() {

    const auth = getAuth();
    const user = auth.currentUser;
    const userData = user.providerData
    const name = userData[0].displayName

    const[title,setTitle]=useState("")
    const[date,setDate]=useState("")
    const[where,setWhere]=useState("")
    const[detail,setDetail]=useState("")

    function handleTitlechange(e){
        setTitle(e.target.value)
    }
    function handleDatechange(e){
        setDate(e.target.value)
    }
    function handleWherechange(e){
        setWhere(e.target.value)
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
      <p style={{textAlign: "center",fontSize: "40px"}}>イベント情報 投稿フォーム</p>
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
                sx={{width: "70%"}}
                
            /><br></br>
            <TextField  
                variant="standard" 
                value={date} 
                label="date"
                onChange={handleDatechange} 
                sx={{width: "70%"}}
                
            /><br></br>
            <TextField
                variant="standard" 
                value={where} 
                label="where"
                onChange={handleWherechange} 
                sx={{width: "70%", marginBottom:'20px'}}
                
            /><br></br>
            <TextField  
                fullWidth
                variant="outlined" 
                value={detail} 
                label="detail"
                onChange={handleDetailchange} 
                multiline
                rows={6}
                
                sx={{width: "70%" , marginBottom:'10px'}}
                
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
                onClick ={linkToHome}
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