import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import EventInfo from './EventInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: null
          };
    }

    onEventSelect(event) {
        this.setState({selectedEvent: event});
    }

    
    render() {
        const directory = this.props.events.map(event => {
            return (
                <div key={event.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onEventSelect(event)}>
                        <CardImg width="100%" src={event.image} alt={event.name} />
                        <CardImgOverlay>
                        <CardTitle>{event.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <EventInfo event={this.state.selectedEvent} />
            </div>
        );
    }
}

export default Directory;