import React,{ Component } from 'react';

const MyContext = React.createContext();


class MyProvider extends Component {

    state = {
        users:[
            {id:1,name:'Francis'},
            {id:2,name:'Steve'},
            {id:3,name:'Mark'},
        ],
        active:true
    }
    
    toggleactive = () => {
        this.setState({active:!this.state.active})
    }

    render(){
        const {users,active} = this.state;
        return(
            <MyContext.Provider value={{
                users: users,
                active:active,
                toggleactive: this.toggleactive

             }}> 
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export {MyContext,MyProvider}
