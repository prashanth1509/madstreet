import React from 'react';
import Rating from '../rating';

export default class Item extends React.Component {
    render(){
        let {id, name, image, category, rating, price, color, quantity, description} = this.props;

        return (
            <div className="item">
                <div className="info">
                    <div className="image">
                        <img alt="img" src={image} className="img"/>
                    </div>
                    <div className="details">
                        <div>
                            <span className="title">{name}</span>
                            <div className="colors" style={{border: '1px solid ' + color}}>
                                <div className="color" style={{backgroundColor: color}}></div>
                            </div>
                        </div>
                        <div className="line-2">
                            <Rating rating={rating}/>
                        </div>
                        <div className="desc">
                            <span className={category === "0" ? 'category apparel' : 'category accessory'}>{''}</span>
                            <span className="text">
                                {description}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={"price" + (quantity > 1? "" : " oos")}>
                    <div className="value">Rs. {price}</div>
                    <div className="quantity">
                        {quantity > 1 ?  "Available (" + (quantity) + ")": "Sold out"}
                    </div>
                </div>
            </div>
        )
    }
}