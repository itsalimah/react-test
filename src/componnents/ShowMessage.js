import React, { Component } from "react";
class ShowMessage extends Component{
constructor(props){
    super(props)
    this.state={et:true}
}
handlClk =() => {
    this.setState({et:!this.state.et})
}
render(){
    return <>
    <button onClick={this.handlClk}>{this.state.et?"Hide":"SHOW"}</button>
    {this.state.et && <p>hayar awa</p>}
    </>
}






 }
 export default ShowMessage;