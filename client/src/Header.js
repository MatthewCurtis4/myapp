import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import navBar from './src/components/header/navBar'
import './src/css/header.css'

class Header extends Component {
    render() {
        return {
            <div>
             <div id="particles-js"></div>
             <navBar/>
             <Title/>
          </div>
        };
    }
}

ReactDOM.render(<Header/>, document.getElementById('header'));