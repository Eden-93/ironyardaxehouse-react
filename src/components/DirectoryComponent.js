import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.myRef= React.createRef();
        this.state = {
            selectedEvent: null
          };
    }

    onEventSelect(event) {
        //this.scrollInto();
        this.setState({selectedEvent: event});
        this.myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }

    scrollInto(event) {
        if (this.myRef.current) {
            window.scrollTo(0, this.myRef.current.offsetTop)
        }
    }

    renderSelectedEvent(event) {
        if (event) {
            return (
                <Card ref={this.myRef}>
                    <CardImg top src={event.image} alt={event.name}/>
                    <CardBody>
                        <CardTitle>{event.name}</CardTitle>
                        <CardText>{event.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        return <div />;
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
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedEvent(this.state.selectedEvent)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;