import React, { useState } from "react";

export default function User(props) {
    const [filter,setFilter] = useState("t")
    function handleChange(event) {
        setFilter(event.target.value)
    }
    return (
        <>
            <select onChange={handleChange}>
                <option value="t">tout</option>
                <option value="m">homme</option>
                <option value="f">femme</option>
            </select>
            
            {props.data.map(usr =>{
                if (filter!=="t" && usr.gender !== filter) {
                    return
                }
                return (
                <h1><span>{usr.gender==="m"?"Mr":"Mme"}</span> {usr.name}</h1>
                )
            })}
        </>
    )
}