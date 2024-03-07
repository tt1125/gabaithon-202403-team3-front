import { Button } from "@mui/material";

export default function home (){
  return (
    <main style={{paddingTop:"20vh"}}>
      <p style={{textAlign: "center",fontSize: "40px"}}>ホーム画面｜HOME</p>
      <div style={{backgroundColor : "rgba(255, 255, 255, 1)",
                   width: "90%",
                   height: "400px",
                   margin:"auto",
                   textAlign: "center",
                   fontSize:"40px",
                   }}>
        <Button variant="contained" color="warning" sx={{marginTop:"50px",marginBottom:"10%",marginLeft:"2%",marginRight: "2%" ,width:"30%",height: "300px",fontSize:"40px"}}>子育て<br></br>掲示板</Button>
        <Button variant="contained" color="warning" sx={{marginTop:"50px",marginBottom:"10%",marginRight: "2%" ,width:"30%",height: "300px",fontSize:"40px"}}>イベント<br></br>情報</Button>
        <Button variant="contained" color="warning" sx={{marginTop:"50px",marginBottom:"10%",marginRight:"2%",width:"30%",height: "300px",fontSize:"40px"}}>子育て<br></br>支援情報</Button>
      </div>
    </main>
  )
}