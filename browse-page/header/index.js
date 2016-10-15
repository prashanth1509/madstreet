import React from 'react';
import SearchImage from '../__images/search.svg';

export default class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="logo">
                    <div className="name">
                        <span>
                            <img alt="heart" src={require('../__images/heart.svg')} className="heart"/>
                        </span>
                        MAD <span className="clip">DEN STREET</span>
                    </div>
                </div>
                <div className="search">
                    <input type="text" onChange={(e) => this.props.onSearch(e.target.value)} className="input" placeholder="Search by name.."/>
                    <img alt="search" src={SearchImage} className="icon"/>
                </div>
            </div>
        )
    }
}