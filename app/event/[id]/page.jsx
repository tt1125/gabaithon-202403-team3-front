"use client"
import { Button, TextField } from "@mui/material";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function eventdetail() {
    const [event, setEvent] = useState("");
    const router = useParams();
    const id = router.id;
    const ul = useRouter();

    useEffect(() => {
            const fetchEvent = async () => {
                const response = await fetch(`http://localhost:8000/api/v1/events/${id}`);
                const data = await response.json();
                console.log(data)
                setEvent(data);
            };
            fetchEvent();
    }, []);

    const linkToEvent = () => {
      ul.push("/event")
    };

    return (
        <main style={{paddingTop:"10vh"}}>
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
            

            <div style= {{fontSize: "30px" ,width: "90%",height: "50px", textAlign: "left",marginLeft: "50px", borderBottom: "solid 1px" }}>
                {event.title}
            </div>
            <div style= {{fontSize: "30px" ,width: "90%",height: "50px", textAlign: "left",marginLeft: "50px", borderBottom: "solid 1px" }}>
                {event.date}
            </div>
            <div style= {{fontSize: "30px" ,width: "90%",height: "50px", textAlign: "left",marginLeft: "50px", borderBottom: "solid 1px" }}>
                {event.location}
            </div>
            <div style= {{fontSize: "30px" ,width: "90%",height: "230px", textAlign: "left",marginLeft: "50px"}}>
                {event.content}
            </div>

         
         



            </div>


                <div style ={{ textAlign: "left",marginLeft: "5%"}}>
                    <Button
                        onClick={linkToEvent}
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