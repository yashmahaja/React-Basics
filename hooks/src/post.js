import { useEffect } from "react";

const Post = ({item,i}) => {


    useEffect(() => {
        console.log("Post Created")
        return () =>  (
            console.log('Component Exit')
        )

    },[])
    return(

        <div key={i}>
        <div>Name: {item.name}</div>
        <div>Body: {item.body}</div>
        <hr/>
      </div>
    )
}

export default Post;