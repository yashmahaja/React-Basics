import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players:[],
    result:''
  };

  addplayerHandler = (name) => {
    this.setState((previousState) => ({
        players:[
            ...previousState.players,
            name
        ]


    }))
  }

  removeplayerhandler = (idx) =>{
    let newarray =  this.state.players;
    newarray.splice(idx,1);
    this.setState({players:newarray})
  }

  nexthandler = () => {
    const { players } = this.state;
    if(players.length < 2){
      toast.error('You need more than one player',{
          position: toast.POSITION.TOP_LEFT,
          autoClose:2000
      });
  } else{
    this.setState({
        stage:2
    },()=>{
        setTimeout(()=>{
            this.generateloser()
        },2000)
    })
}
  }

  generateloser = () => {
    const { players } = this.state;
    this.setState({
      result:players[Math.floor(Math.random()*players.length)]
    })
  }

  resetgame = () => {
    this.setState({
      stage: 1,
      players:[],
      result:''
    })
  }

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addplayer: this.addplayerHandler,
            removeplayer: this.removeplayerhandler,
            next:this.nexthandler,
            generateloser: this.generateloser,
            resetgame: this.resetgame
          }}
        >
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer/>
      </>
    );
  }
}

export { MyContext, MyProvider };
