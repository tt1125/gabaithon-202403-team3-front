"use client"
import { Button, TextField } from "@mui/material";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function informationdetail() {

    const router = useRouter();
    const param = useParams();
    const id = param.id;
    const linkToInformation = () => {
      router.push("/information")
    };
    const [information, setInformation] = useState("");

    useEffect(() => {
        const fetchInformation = async () => {
            const response = await fetch(`http://localhost:8000/api/v1/informations/${id}`);
            const data = await response.json();
            setInformation(data);
        };
        fetchInformation();
}, []);


    return (
        <main style={{paddingTop:"10vh"}}>
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
            

            <div style= {{fontSize: "30px" ,width: "90%",height: "50px", textAlign: "left",marginLeft: "50px", borderBottom: "solid 1px" }}>
                {information.title}
            </div>
            <div style= {{fontSize: "30px" ,width: "90%",height: "330px", textAlign: "left",marginLeft: "50px"}}>
                {information.content}
            </div>

         
         



            </div>


                <div style ={{ textAlign: "left",marginLeft: "5%"}}>
                    <Button
                        onClick={linkToInformation}
                        color="success"
                        variant="contained"
                        sx={{
                            width: "180px",
                            fontSize: "20px",
                        }}>←戻る</Button>                    
                </div>
        </main>
    )
}