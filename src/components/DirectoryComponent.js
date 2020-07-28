import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {
    
    render() {
        const directory = this.props.events.map(event => {
            return (
                <div key={event.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(event.id)}>
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
            </div>
        );
    }
}

export default Directory;