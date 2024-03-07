"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Event from "../../components/Event"
import { useEffect, useRef, useState } from "react";

export default function event() {

    const router = useRouter();
    const linkToHome = () => {
      router.push("/")
    };
    const linkToNewevent = () => {
        router.push("/event/newevent")
      };

    return (
        <main>
            <p style={{ fontSize: "40px", textAlign: "center", margin: "20px 0" }}>イベント情報</p>
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "90%",
                height: "400px",
                margin: "auto",
                textAlign: "center",
                fontSize: " 20px",
                marginBottom: "10px"
            }}>
            
            

            <Event title="第〇回〇〇会開催！" date="1/22" where="佐賀市"/>
            <Event title="第〇回〇〇会開催！" date="1/22" where="佐賀市"/>
            <Event title="第〇回〇〇会開催！" date="1/22" where="佐賀市"/>
            <Event title="第〇回〇〇会開催！" date="1/22" where="佐賀市"/>
            <Event title="第〇回〇〇会開催！" date="1/22" where="佐賀市"/>
            <Event title="第〇回〇〇会開催！" date="1/22" where="佐賀市"/>


         



            </div>

            <div style={{ display: "flex" , justifyContent: "space-between" }}>

                <div style ={{ textAlign: "left",marginLeft: "5%"}}>
                    <Button
                        onClick={linkToHome}
                        color="success"
                        variant="contained"
                        sx={{
                            width: "180px",
                            fontSize: "20px",
                        }}>←ホームに戻る</Button>                    
                </div>
                <div style ={{ textAlign: "right",marginRight: "5%"}}>
                    <Button
                        onClick={linkToNewevent}
                        color="error"
                        variant="contained"
                        sx={{

                            width: "150px",
                            fontSize: "20px"
                        }}>新規作成</Button>                    
                </div>

                



            </div>
        </main>
    )
}