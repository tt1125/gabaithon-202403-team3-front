"use client"

export default function Thread({thread}) {

    const year = thread.created_at.substring(0, 4);
    const month = thread.created_at.substring(5, 7);
    const day = thread.created_at.substring(8, 10);
    const hour = thread.created_at.substring(11, 13);
    const minute = thread.created_at.substring(14, 16);
    
    const formattedDate = `${year}/${month}/${day}   ${hour}:${minute}`;

    return (
        <div style={{width:"full" , height :"80px" , borderTop:"1px solid #000000", padding:"10px" }}>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
            <span>{formattedDate}</span>
        </div>
        <div style={{width:"100%" ,display:"flex"}}>
            <p style={{fontSize:"20px" , marginTop:"10px"}}>{thread.comment}</p>
        </div>
    </div>
    )
}

