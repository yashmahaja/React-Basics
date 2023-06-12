import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <>
                <header className={this.props.active ? 'noactive' : 'active'}>
                    <div className='logo' onClick={() => console.log('Click')}>
                        Logo
                    </div>
                    <input onChange={(event) => this.props.keywords(event)} />
                    <button onClick={() => this.props.changecolor()}>Change</button>
                </header>
            </>
        )
    }
}

export default Header;
