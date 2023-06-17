import React,{useState} from "react";
import Post from "./post";

const App = (props) => {

let [state,setstate] = useState({
  count:props.initialCount,
  user:'Francis'
})

let [post,setpost] = useState([{
  name:"Hello Hooks",
  body:'Hooks made functional component easy'
}])


const restone = () => {
  setstate(prevState => {
    return {...prevState, count:prevState.count - 1}
  })
}

const removepost = () =>{
setpost([])

}

const addonepost = () =>{
let newpost = {
  name:"Sugar is bad",
  body:'Coffee is good'
}
setpost([...post,newpost])

}
  return(
    <>
    <h2>{state.user}</h2>
    <h3>Count:{state.count}</h3>
    <button onClick={() => setstate({...state,count:state.count+1})}>Add One</button>
    <button onClick={restone}>Rest One</button>
    <button onClick={() => setstate({...state,count:props.initialCount})}>Reset</button>
    <hr/>
    {post.map((item,i) => (
      <Post 
      item={item} 
      key={i}/>
    ))}
     <button onClick={addonepost}>Add one more</button>
     <button onClick={removepost}>Remove Post</button>
    </>
  )
}
export default App;
