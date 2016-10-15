import React from 'react';
import GridImage from '../__images/grid.svg';
import ListImage from '../__images/list.svg';

export default class LeftPane extends React.Component {
    render(){
        return (
            <div className="left-pane">
                <div className="bar sort-bar">
                    <div className="head">Sort</div>
                    <select className="select">
                        <option value="0">None</option>
                        <option value="1">Price (Low to High)</option>
                        <option value="2">Price (High to Low)</option>
                        <option value="3">Category (Ascending)</option>
                        <option value="4">Category (Descending)</option>
                    </select>
                </div>
                <div className="bar filter-bar">
                    <div className="head">Filter</div>
                    <div className="price-f">
                        <div>Price</div>
                        <input type="text" placeholder="min"/>
                        <span>{' - '}</span>
                        <input type="text" placeholder="max"/>
                    </div>
                    <div className="button">Apply</div>
                </div>
                <div className="bar view-bar">
                    <div className="head">View</div>
                    <div className="view-f">
                        <img title="grid" src={GridImage}/>
                        <img title="list" src={ListImage}/>
                    </div>
                </div>
            </div>
        )
    }
}