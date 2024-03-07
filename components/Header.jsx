import { Button } from "@mui/material";

export default function Header (){
    return(
         <div style={{width : '100' , backgroundColor : "rgba(255, 255, 255, 0)", display : "flex" , textAlign:"center" , justifyContent : "space-between" , backgroundColor : "rgba(255, 255, 255, 0)"}}>
            <span style={{marginLeft : "30px" , fontSize : "40px"}}>Lulla</span>
            <div style={{marginRight : "30px" , marginTop : "10px"}}>
           <Button variant="contained" color="warning" >ログアウト</Button></div>
         </div>
    )
}