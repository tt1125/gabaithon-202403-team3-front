"use client"

export default function Thread({thread}) {

    return (
        <div style={{width:"full" , height :"80px" , borderTop:"1px solid #000000", padding:"10px" }}>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
            <p>作成ユーザー 2024/03/07 14:11</p>
            <p>id=dcndwknk</p>
        </div>
        <div style={{width:"100%" ,display:"flex"}}>
            <p style={{fontSize:"20px" , marginTop:"10px"}}>{thread.name}</p>
        </div>
    </div>
    )
}

