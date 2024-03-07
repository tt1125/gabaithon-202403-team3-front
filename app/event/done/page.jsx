"use client";
import { useRouter } from "next/navigation";
import { Button, TextField } from "@mui/material";

export default function neweventdone() {

    const router = useRouter();
    const linkToHome = () => {
      router.push("/")
    };
    const linkToNewevent = () =>{
        router.push("/event/newevent")
    };

    return (
        <main style={{paddingTop:"20vh"}}>
      <p style={{textAlign: "center",fontSize: "40px"}}>イベント情報  投稿フォーム</p>
      <div style={{backgroundColor : "rgba(255, 255, 255, 1)",
                   width: "90%",
                   height: "400px",
                   margin:"auto",
                   textAlign: "center",
                   fontSize:"40px",
                   }}>
        <p style={{textAlign:"center",lineHeight: "340px"
        }}>投稿完了しました</p>
            <div style={{textAlign: "right",marginRight: "10px"}}>
                <Button 
                fullWidth
                onClick={linkToNewevent}
                color="error"
                variant="contained" 
                
                sx={{
                    width:"180px",
                    fontSize:"20px"
                    }}>続けて投稿する</Button>
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