import React from 'react';
import {render} from 'react-dom';
import shims from './__helpers/shims';
import APIHelper from './__helpers/api';

import resetStyles from './__styles/reset.css';
import pageStyles from './__styles/styles.css';

import Header from './header';
import LeftPane from './left-pane';
import RightPane from './right-pane';

function Loader(props) {
    return (
        <div style={{padding: 10, width: '100%', display: 'flex', 'justify-content': 'flex-start', flexDirection: 'row'}}>
            <div style={{width: '10%', margin: '0 10px'}}>
                <div className="loader-shell" style={{height: 100}}></div>
            </div>
            <div style={{width: '70%', margin: '0 10px'}}>
                <div className="loader-shell" style={{height: 30}}></div>
                <div className="loader-shell" style={{width: '60%', marginTop: 5, height: 30}}></div>
            </div>
        </div>
    )
}

class Application extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: null
        }
    }

    componentDidMount(){
        APIHelper.getProductList().then((data)=>this.setState(data));
    }

    render(){
        return (
            <div className="page">
                <Header/>
                <div className="content">
                    <LeftPane/>
                    {
                        this.state.items ? <RightPane/> : <Loader/>
                    }
                </div>
            </div>
        );
    }
}

render(<Application/>, document.getElementById('container'));