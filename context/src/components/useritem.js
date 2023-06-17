import React,{ useContext } from 'react'
import { MyContext } from '../context/context';

const UsersItem = () => {
    const context = useContext(MyContext);

    console.log(context)

    return(
        <>
            {context.active  ?

            context.users.map((user) => (
                <div key={user.id}>
                    <div>{user.name}</div>
                </div>
            ))
            
            :
            null}

            <hr/>
            <button onClick={context.toggleactive}>Toggle List</button>
        </>
    )
}

export default UsersItem;