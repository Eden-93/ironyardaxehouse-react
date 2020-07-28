import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderEvent({ event }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={event.image} alt={event.name} />
                <CardBody>
                    <CardTitle>{event.name}</CardTitle>
                    <CardText>{event.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function EventInfo(props) {
    if (props.event) {
        return (
            <div className="container" >
                <div className="row" >
                    <RenderEvent event={props.event} />
                </div>
            </div>
        );
    }
    return (
        <div />
    );
}


export default EventInfo;