import React from 'react';
import {render} from 'react-dom';
import shims from './__helpers/shims';
import APIHelper from './__helpers/api';

import resetStyles from './__styles/reset.css';
import pageStyles from './__styles/styles.css';

import Header from './header';
import LeftPane from './left-pane';
import RightPane from './right-pane';
import CONSTANTS from './__helpers/constants';
import Notification, {notifier} from './notifier';

function Loader(props) {
    return (
        <div style={{padding: 30, width: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
            <div className="loader-shell first"></div>
            <div style={{width: '70%'}}>
                <div className="loader-shell second"></div>
                <div className="loader-shell third"></div>
            </div>
        </div>
    )
}

class Application extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: null,
            _items_src: null
        }
    }

    componentDidMount(){
        APIHelper.getProductList().then((data)=>this.setState({
            items: data.products,
            _items_src: Object.assign([], data.products)
        }, () => notifier('Showing ' + data.products.length + ' items')));
    }


    onSort(type){
        let predicate, items = this.state.items;

        if(type === CONSTANTS.SORT_TYPES[0]) {
            predicate = (a, b) => parseFloat(a.price) - parseFloat(b.price);
        }
        else if(type === CONSTANTS.SORT_TYPES[1]) {
            predicate = (a, b) => parseFloat(a.price) - parseFloat(b.price);
        }
        else if(type === CONSTANTS.SORT_TYPES[2]) {
            predicate = (a, b) => parseInt(b.category) - parseInt(a.category);
        }
        else if(type === CONSTANTS.SORT_TYPES[3]) {
            predicate = (a, b) => parseInt(a.category) - parseInt(b.category);
        }
        else if(type === CONSTANTS.SORT_TYPES[4]) {
            predicate = (a, b) => parseFloat(a.rating) - parseFloat(b.rating);
        }
        else if(type === CONSTANTS.SORT_TYPES[5]) {
            predicate = (a, b) => parseFloat(b.rating) - parseFloat(a.rating);
        }


        if(predicate)
            window.requestAnimationFrame(() => this.setState({items: items.sort(predicate)}, () => notifier('Items sorted')));
        else
            this.setState({items: this.state._items_src});

        this.hideFiltersForMobile();

    }

    onFilter(filterItem){
        let {type, data} = filterItem;
        let predicate, items = this.state.items;

        if(type == 'price') {
            if(data.max > 0) {
                predicate = (item) => {
                    let itemPrice = parseFloat(item.price);
                    return (itemPrice > data.min && (itemPrice < (data.max || Number.MAX_SAFE_INTEGER)))
                };
            }
        }

        if(predicate)
            window.requestAnimationFrame(() => this.setState({items: items.filter(predicate)}, () => notifier('Items filtered')));
        else
            this.setState({items: this.state._items_src});

        this.hideFiltersForMobile();
    }

    onSearch(query){

        if(!query) {
            this.setState({items: this.state._items_src});
            return;
        }

        let predicate = (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1, items = this.state.items;
        window.requestAnimationFrame(() => this.setState({items: items.filter(predicate)}));
    }


    hideFiltersForMobile(){
        window.requestAnimationFrame(() => {
            try {
                document.getElementById('toggler').checked = false;
            }
            catch (e){}
        })
    }

    render(){
        return (
            <div className="page">
                <Header onSearch={this.onSearch.bind(this)}/>
                <Notification/>
                <div className="content">
                    <LeftPane onSort={this.onSort.bind(this)} onFilter={this.onFilter.bind(this)}/>
                    <div className="right-pane-container">
                        {
                            this.state.items ? <RightPane items={this.state.items}/> : <Loader/>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

render(<Application/>, document.getElementById('container'));