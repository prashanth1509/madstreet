import React from 'react';
import Item from './item';

export default class RightPane extends React.Component {
    render(){
        return (
            <div className="right-pane">
                <div className="menu">
                    menu
                </div>
                <div className="items">
                    <Item/>
                </div>
            </div>
        )
    }
}