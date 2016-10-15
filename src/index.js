import React from 'react';
import {render} from 'react-dom';
import shims from './helpers/shims';
import Application from './browse-page/';

render(<Application/>, document.getElementById('container'));