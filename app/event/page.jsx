"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Event from "../../components/Event"
import { useEffect, useRef, useState } from "react";

export default function event() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:8000/api/v1/events');
            const data = await response.json();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    const router = useRouter();
    const linkToHome = () => {
      router.push("/")
    };
    const linkToNewevent = () => {
        router.push("/event/newevent")
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
                marginBottom: "10px",
                whiteSpace: "nowrap",
                overflow: "scroll"
            }}>
                {events.map((event) => (
                    <Event 
                        key={event.id}
                        title={event.title} 
                        date={event.date}
                        where={event.location}
                    />
                ))}
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