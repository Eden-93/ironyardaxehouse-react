import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem({event, onClick}) {
    return (
        <Card onClick={() => onClick(event.id)}>
                        <CardImg width="100%" src={event.image} alt={event.name} />
                        <CardImgOverlay>
                        <CardTitle>{event.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
    )
}

function Directory(props) {
    
    const directory = props.events.map(event => {
        return (
            <div key={event.id} className="col-md-5 m-1">
                <RenderDirectoryItem event={event} onClick={props.onClick} />
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

export default Directory;