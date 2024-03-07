import { Button } from "@mui/material";
import Thread from "../../components/thread";

export default function thread() {
    return (
        <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "60%", marginTop: "50px", textAlign: "center", backgroundColor: "white", padding: "30px 10px 80px 10px" }}>
                <p style={{ fontSize: "30px", margin: "20px 0" }}>掲示板一覧</p>
                <Thread /> <Thread /> <Thread /> <Thread /> <Thread /> <Thread /> <Thread /> <Thread />
            </div>
            <div style={{width:"100%" ,display : "flex" , justifyContent:"center" , backgroundColor:"#F8F2E2"}}>
                <div style={{ position: "fixed", top: "90vh", width: "30%", display: "flex", justifyContent: "space-between" }}>
                    <Button variant="contained" color="warning">ホームへ戻る</Button>
                    <Button variant="contained" color="warning">新規作成</Button>
                </div>
            </div>
        </main>
    )
}