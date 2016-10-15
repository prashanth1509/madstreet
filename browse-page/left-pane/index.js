import React from 'react';

export default class LeftPane extends React.Component {
    render(){
        return (
            <div className="left-pane">
                <div className="sort-bar">
                    <h2>Sort</h2>
                </div>
                <div className="filter-bar">
                    <h2>Filter</h2>
                </div>
                <div className="view-bar">
                    <h2>View</h2>
                </div>
            </div>
        )
    }
}