import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';

// App css
import 'style!css!applicationStyles';

render(
    <Main />, 
    document.getElementById("react-container")
);