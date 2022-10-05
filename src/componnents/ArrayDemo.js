import React,{ useState } from "react";

export default function ArrayDemo(props) {
    const [data,setData] = useState([{id:1,name:"dd 1"},{id:2,name:"dd 2"},{id:3,name:"dd 3"}])
    return (
        <>
            <button>ajouter</button><br />
            <ul>
            {data.map(dd=><li>{dd}</li>)}
            </ul>
        </>
    )
}