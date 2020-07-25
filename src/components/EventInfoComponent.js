import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class EventInfo extends Component {

    renderEvent(event){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={event.image} alt={event.name}/>
                    <CardBody>
                        <CardTitle>{event.name}</CardTitle>
                        <CardText>{event.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render(){
        if (this.props.event) {
            return (
            <div className="row" >
                {this.renderEvent(this.props.event)}
            </div>
            );
        }
            return (
                <div />
            );
    }
}

export default EventInfo;