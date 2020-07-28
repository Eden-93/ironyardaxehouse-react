import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import EventInfo from './EventInfoComponent';
import { EVENTS } from '../shared/events';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: EVENTS,
        selectedEvent: null
      };
    }

    onEventSelect(eventId) {
        this.setState({selectedEvent: eventId});
    }

  render() {
      return (
          <div>
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">IronYard AxeHouse</NavbarBrand>
              </div>
              </Navbar>
              <Directory  events={this.state.events} onClick={eventId => this.onEventSelect(eventId)} />
              <EventInfo event={this.state.events.filter(event => event.id === this.state.selectedEvent)[0]} />
          </div>
      );
  }
}

export default Main;