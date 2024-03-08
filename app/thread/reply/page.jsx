"use client"
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Thread from "../../../components/Thread";
import Reply from "../../../components/Reply";
import { grey } from "@mui/material/colors";
import { getAuth} from "firebase/auth";

export default function reply() {
    const [data , setData] = useState([])
    const [reply, setReply] = useState("")
    function handleReplychange(e) {
        setReply(e.target.value)
    }

    const auth = getAuth();
    const user = auth.currentUser;
    const userData = user.providerData
    const name = userData[0].displayName
    const router = useRouter();
    const currentPath = router.pathname;
    const postId = currentPath.split("/").pop();

    const linkToThread = () => {
      router.push("/thread")
    };


    const getData = async function(){
    const response = await fetch(`      `); //ユーザー名 name
    const responseData =  await response.json();
    console.log("data", responseData)}
    const filteredArray = responseData.filter(item => item.id === postId);
    setData([...filteredArray])

    useEffect(()=>{
         getData()
    },[])   

    return (
        <main style={{paddingTop:"5vh"}}>
            <p style={{ fontSize: "40px", textAlign: "center", margin: "20px 0" }}>掲示板返信一覧</p>
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



                {
                    data.map((data)=>{
                        return <Reply data = {data}/>
                    })

                }
                {/* <Reply user="つる"
                    time="2024/03/08 2:40"
                    comment="眠いです" /> */}


                    {/* {
                       data.map((oneData)=>{
                      console.log("一人分のデータです",oneData)


                       }) } */}


                    


            </div>

            <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>

                <Button
                    onClick={linkToThread}
                    color="success"
                    variant="contained"
                    sx={{
                        width: "180px",
                        fontSize: "20px",
                    }}>←戻る</Button>

                <TextField

                    value={reply}
                    label="reply"
                    onChange={() => handleReplychange}
                    multiline
                    rows={2}
                    sx={{ width: "60%", backgroundColor: "white", marginInline: "20px" }}
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