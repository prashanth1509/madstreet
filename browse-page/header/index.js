import React from 'react';
import SearchImage from '../__images/search.svg';

export default class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="logo">
                    <div>
                        MAD DEN STREET
                    </div>
                    <div className="sub">
                        bla bla bla
                    </div>
                </div>
                <div className="search">
                    <input type="text" className="input" placeholder="Search.."/>
                    <img src={SearchImage} className="icon"/>
                </div>
            </div>
        )
    }
}