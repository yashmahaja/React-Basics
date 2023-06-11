import React,{Component} from 'react';

// const Header = () => {

//     const getfullyear = () => {
//         const newDate = new Date();
//         return newDate.getFullYear() 
//     }
//     return(
//     //  <div>
//     //     The Year is {getfullyear()}
//     //  </div>
//     <>
//     <header>
//         <div className="logo">Logo</div>
//         <input/>
//     </header>
// </>
//     )
// }



class Header extends Component {
     changed = (event) => {
        console.log(event.target.value)
    }
    render(){
        return(
            <>
            <header>
                <div className='logo'
                onClick={() => console.log('Click')}>
                    Logo
                </div>
                <input
                onChange={(event) => this.changed()}/>
            </header>
            
            </>
        )
    }
}
export default Header;