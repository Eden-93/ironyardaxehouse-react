import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { EVENTS } from './shared/events';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: EVENTS
      };
    }

  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">IronYard AxeHouse</NavbarBrand>
              </div>
              </Navbar>
              <Directory  events={this.state.events} />
          </div>
      );
  }
}

export default App;