import React from 'react';
import GridImage from '../__images/grid.svg';
import ListImage from '../__images/list.svg';
import CONSTANTS from '../__helpers/constants';

export default class LeftPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filters: {
                price: {
                    data: {
                        min: 0,
                        max: 0
                    }
                }
            }
        };
    }

    priceFilterChange(value, maxOrMin) {
        if(maxOrMin === 'min') {
            this.state.filters.price.data.min = parseFloat(value) || 0.0;
        }
        else {
            this.state.filters.price.data.max = parseFloat(value) || 0.0;
        }
        this.forceUpdate();
    }

    onFilterApply(){
        let priceData = this.state.filters.price.data;
        priceData.min = parseFloat(priceData.min) || 0;
        priceData.max = parseFloat(priceData.max) || 0;

        if(priceData.min > priceData.max) {
            alert('Please provide correct values for price filter');
        }
        else {
            this.props.onFilter({type: 'price', data: Object.assign({}, priceData)});
        }
    }

    render(){
        return (
            <div className="left-pane-container">
                <input type="checkbox" id="toggler" className="toggler" placeholder="show filters"/>
                <div className="left-pane">
                    <div className="bar sort-bar">
                        <div className="head">Sort</div>
                        <select className="select" onChange={(e) => this.props.onSort(e.target.value)}>
                            <option value="0">{'NONE'}</option>
                            {
                                (CONSTANTS.SORT_TYPES).map(
                                    (item, index) => <option key={index} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="bar filter-bar">
                        <div className="head">Filter <a href="javascript:void(0)" onClick={() => this.props.onFilter({type: 'reset'})} style={{fontSize: 12}}>{'reset'}</a></div>
                        <div className="price-f">
                            <div>Price</div>
                            <input type="text" ref="min-input" placeholder="min" onFocus={()=>{this.refs['min-input'].select()}} value={this.state.filters.price.data.min} onChange={(e) => this.priceFilterChange(e.target.value, 'min')}/>
                            <span>{' - '}</span>
                            <input type="text" ref="max-input" onFocus={()=>{this.refs['max-input'].select()}} placeholder="max" value={this.state.filters.price.data.max} onChange={(e) => this.priceFilterChange(e.target.value, 'max')}/>
                        </div>
                        <div className="button" onClick={this.onFilterApply.bind(this)}>Apply</div>
                    </div>
                    <div className="close-filter" onClick={()=>{try{document.getElementById('toggler').checked = false;}catch(e){}}}>
                        {'Close'}
                    </div>
                </div>
            </div>
        );
    }
}