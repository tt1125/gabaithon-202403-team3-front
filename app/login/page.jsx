import { Button } from "@mui/material";

export default function login () {
    return (
        <main>
            <div style={{textAlign: "center", width: "50",
        height: "30px"}}>
                <input title="ログインID" atti="" class=""></input>
                <br></br>
                <input title="パスワード" atti="" class=""></input>
                <br></br>
            
            <Button variant="contained" color="warning" >ログイン</Button>
            </div>
        </main>
    )
}