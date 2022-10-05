import React, { Component } from "react";
class Disable extends Component{
    constructor(props){
        super(props)
        this.state={inptv:""}
    }
    handlChange=(e)=>{
        this.setState({inptv:e.target.value})
    }
    render(){
        return <>
        <input onChange={this.handlChange} type='text' value={this.state.inptv}/>
        <button disabled={this.state.inptv.length===0? true :false}>Submite</button>
        
        </>
    }

}
export default Disable;