import react ,{Component} from "react";
import Button from 'react-bootstrap/Button';

class CounterClass extends Component{
    constructor(props){
        super(props)
        this.state={counter:0}
    }
    add = () => {
        this.setState({counter:this.state.counter+=1})
    }
    sub = () => {
        this.setState({counter:this.state.counter-=1})
    }
    render(){

        return  (
            <div>
                <p>{this.state.counter}</p>
                <h1>{this.state.counter%2===0?"even":"odd"}</h1>
                {this.state.counter%2!==0 && <h2>odd</h2>}
                <Button variant="primary" onClick={this.add}>Increment</Button>
                <Button variant="primary" onClick={this.sub}>Decrement</Button>
            </div>
        )
    }
}
export default CounterClass;