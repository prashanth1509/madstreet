import React from 'react';

export default class Item extends React.Component {
    render(){
        return (
            <div className="item">
                <div className="info">
                    <div className="image">
                        img, color
                    </div>
                    <div className="details">
                        <div className="title">
                            title
                        </div>
                        <div className="line2">
                            line2
                        </div>
                        <div className="desc">
                            desc
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="value">rs. 100</div>
                    <div className="quantity">2</div>
                </div>
            </div>
        )
    }
}