export default function Reply({user , time , comment}) {
    return (

        <div style={{ width: "100%", textAlign: "left", borderBottom: "solid 1px" }}>
            <div style={{ fontSize: "15px" }}>
                <span>{user}</span>
                <span>　</span>
                <span>{time}</span>
            </div>
            <p >{comment}</p>
        </div>
    )
}