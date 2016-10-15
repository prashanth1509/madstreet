import React from 'react';
import Item from './item';

export default class RightPane extends React.Component {
    constructor(props){
        super(props);
        this.getItems = this.getItems.bind(this);
    }

    emptyComponent(){
        return <div style={{padding: 20}}>No Items!</div>;
    }

    getItems(item, index){
        return <Item key={index} {...item}/>;
    }

    render(){
        let {items} = this.props;

        if(!items || !items.length)
            return this.emptyComponent();

        return (
            <div className="right-pane">
                <div className="menu">
                    <div className="result">
                        {'  Showing ' + this.props.items.length + ' items '}
                    </div>
                </div>
                <div className="items">
                    {items.map(this.getItems)}
                </div>
            </div>
        )
    }
}