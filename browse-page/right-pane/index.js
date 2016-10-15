import React from 'react';
import Item from './item';
import WarningImage from '../__images/warning.svg';
import {notifier} from '../notifier';

export default class RightPane extends React.Component {
    constructor(props){
        super(props);
        this.getItems = this.getItems.bind(this);
    }

    emptyComponent(){
        return (
            <div style={{padding: 20, textAlign: 'center'}}>
                <img src={WarningImage} style={{maxWidth: 100}}/>
                <div style={{fontSize: 20, color: '#848484', margin: 10}}>{'No items found!'}</div>
            </div>
        );
    }

    getItems(item, index){
        return <Item key={index} {...item}/>;
    }

    componentDidUpdate(){
        window.setTimeout( () => notifier('Showing ' + this.props.items.length + ' items'), 1000);
    }

    render(){
        let {items} = this.props;

        if(!items || !items.length)
            return this.emptyComponent();

        return (
            <div className="right-pane">
                <div className="items">
                    {items.map(this.getItems)}
                </div>
            </div>
        )
    }
}