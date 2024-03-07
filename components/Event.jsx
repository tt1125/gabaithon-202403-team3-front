export default function Event({title , date , where}) {
    return (

        <div style={{ fontSize: "40px" ,width: "90%",height: "60px", textAlign: "left",marginLeft: "50px", borderBottom: "solid 1px"}}>
                <span>{title}</span>
                <span> | </span>
                <span>{date}</span>
                <span> | </span>
                <span>{where}</span>
        </div>
    )
}