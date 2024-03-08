"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function informationdetail() {

    const router = useRouter();
    const linkToInformation = () => {
      router.push("/information")
    };

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
                title
            </div>
            <div style= {{fontSize: "30px" ,width: "90%",height: "330px", textAlign: "left",marginLeft: "50px"}}>
                detail
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