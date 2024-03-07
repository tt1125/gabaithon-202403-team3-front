"use client"
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Thread from "../../../components/Thread";

export default function reply() {

    const [reply, setReply] = useState("")
    function handleReplychange(e) {
        setReply(e.target.value)
    }

    return (
        <main>
            <p style={{ fontSize: "40px", textAlign: "center", margin: "20px 0" }}>掲示板返信一覧</p>
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "90%",
                height: "400px",
                margin: "auto",
                textAlign: "center",
                fontSize: "30px",
                marginBottom: "10px"
            }}>
            </div>

            <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>

                <Button
                    color="success"
                    variant="contained"
                    sx={{
                        width: "180px",
                        fontSize: "20px",
                    }}>←ホームへ戻る</Button>

                <TextField

                    value={reply}
                    label="reply"
                    onChange={handleReplychange}
                    multiline
                    rows={2}
                    sx={{ width: "60%" ,backgroundColor: "white",   marginInline: "20px"}}
                />
                <Button
                    color="error"
                    variant="contained"
                    sx={{
                     
                        width: "150px",
                        fontSize: "20px"
                    }}>投稿する</Button>


            </div>



        </main>
    )
}