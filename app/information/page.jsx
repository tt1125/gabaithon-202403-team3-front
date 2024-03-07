"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Information from "../../components/Information"
import { useEffect, useRef, useState } from "react";

export default function information() {

    const router = useRouter();
    const linkToHome = () => {
      router.push("/")
    };
    const linkToNewinformation = () => {
        router.push("/information/newinformation")
      };

    return (
        <main style={{paddingTop:"20vh"}}>
            <p style={{ fontSize: "40px", textAlign: "center", margin: "20px 0" }}>子育て支援情報</p>
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "90%",
                height: "400px",
                margin: "auto",
                textAlign: "center",
                fontSize: " 20px",
                marginBottom: "10px"
            }}>


            <Information title="第〇回〇〇会開催！" />
            <Information title="第〇回〇〇会開催！" />
            <Information title="第〇回〇〇会開催！" />

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
                        onClick={linkToNewinformation}
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