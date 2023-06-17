import React,{Component} from "react";

class Life extends Component {
constructor(props){
    super(props)
console.log("1-cons")
this.state = {name:'Francis'}
}

shouldComponentUpdate(nextProps,nextState){
    if(nextState.name === 'Steve'){
        return false
    }
    return true;
}
static getDerivedStateFromProps(){
    console.log("2-getDerivedStateFromProps")
    return null
}
componentDidMount(){

    console.log("4-componentDidMount")
}

componentWillUnmount(){
    console.log("x-componentWillUnmount")

}
    render(){
        console.log("3-render")
        return(
            <>
                  <hr/>
            <div>{this.state.name}</div>
            <button onClick={() => this.setState({name:'Ron'})}>Change Name</button>
            </>
        )
    }
}
export default Life;