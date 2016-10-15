import React from 'react';
import SearchImage from '../__images/search.svg';

export default class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="logo">
                    <div className="name">
                        MAD <span className="clip">DEN STREET</span>
                    </div>
                    <div className="sub">
                        bla bla bla
                    </div>
                </div>
                <div className="search">
                    <input type="text" onChange={(e) => this.props.onSearch(e.target.value)} className="input" placeholder="Search by name.."/>
                    <img src={SearchImage} className="icon"/>
                </div>
            </div>
        )
    }
}