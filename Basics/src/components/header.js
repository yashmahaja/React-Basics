import React from 'react';

const Header = (props) => {
        return (
            <>
                <header className={props.active ? 'noactive' : 'active'}>
                    <div className='logo' onClick={() => console.log('Click')}>
                        Logo
                    </div>
                    <input onChange={(event) => props.keywords(event)} />
                    <button onClick={() => props.changecolor()}>Change</button>
                </header>
            </>
        )
    }


export default Header;
