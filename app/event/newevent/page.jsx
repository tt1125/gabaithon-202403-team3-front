"use client"
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function newevent() {

    const[title,setTitle]=useState("")
    const[date,setDate]=useState("")
    const[where,setWhere]=useState("")
    const[detail,setDetail]=useState("")

    const router = useRouter();

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


    const handleSubmit = async () => {
        const eventData = {
            title: title,
            date: date,
            location: where,
            content: detail,
            user_id: "112345",
        };
        
        try {
            await axios.post("http://localhost:8000/api/v1/events", eventData);
            alert("イベントが正常に投稿されました！");
            router.push("/event");
        } catch (error) {
            console.error("イベントの投稿に失敗しました。", error);
            alert("イベントの投稿に失敗しました。");
        }
    };


    const linkToEvent = () => {
      router.push("/event")
    };


    return (
        <main style={{paddingTop:"20vh"}}>
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
                onClick={handleSubmit}
                sx={{
                    width:"150px",
                    fontSize:"20px"
                    }}>投稿する</Button>
            </div>
      </div>
      <div style={{textAlign: "left",marginLeft: "10px",marginTop: "10px"}}>
                <Button 
                fullWidth
                onClick ={linkToEvent}
                color="success"
                variant="contained" 
                
                
                sx={{
                    width:"180px",
                    fontSize:"20px"
                    }}>←戻る</Button>
            </div>


    </main>
    )
}