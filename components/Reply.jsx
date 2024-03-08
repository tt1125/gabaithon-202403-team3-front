export default function Reply({data}) {


    const year = data.created_at.substring(0, 4);
    const month = data.created_at.substring(5, 7);
    const day = data.created_at.substring(8, 10);
    const hour = data.created_at.substring(11, 13);
    const minute = data.created_at.substring(14, 16);
    
    const formattedDate = `${year}/${month}/${day}   ${hour}:${minute}`;
    return (

        <div style={{ width: "100%", textAlign: "left", borderBottom: "solid 1px" }}>
            <div style={{ fontSize: "15px" }}>
                <span>{data.user_id}</span>
                <span>{formattedDate}</span>
            </div>
            <p >{data.comment}</p>
        </div>
    )
}