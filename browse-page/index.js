import React from 'react';
import {render} from 'react-dom';
import shims from './helpers/shims';

import resetStyles from './reset.css';
import pageStyles from './styles.css';

import Header from './header';
import LeftPane from './left-pane';
import RightPane from './right-pane';

class Application extends React.Component {
    render(){
        return (
            <div className="page">
                <Header/>
                <div className="content">
                    <LeftPane/>
                    <RightPane/>
                </div>
            </div>
        );
    }
}

render(<Application/>, document.getElementById('container'));