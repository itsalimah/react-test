import React, { useState, useEffect } from "react";

export default function Counter(props) {
    const [counter,setCounter] = useState(0)
    // function add() {
    //     setCounter(prevCounter=> prevCounter + 1)
    // }
    // function sub() {
    //     setCounter(prevCounter=> prevCounter - 1)
    // }
    console.log("render");
    function add() {
        setCounter(counter + 1)
    }
    function sub() {
        setCounter(counter-1)
    }
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>console.log(products))
    }
    )
    return (
        <>
            <p>{counter && <p>test</p>}</p>
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
        </>
    )
}