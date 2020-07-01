import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id: 0,
                    name: 'Birthday Parties',
                    image: '/public/assets/images/birthday_parties.JPG',
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea autem quibusdam eius itaque quis praesentium voluptates nulla. Aut consectetur et modi corrupti consequatur! Et, voluptatum placeat! Eius, repellat fuga."
                },
                {
                    id: 1,
                    name: 'Festivals',
                    image: '/public/assets/images/Beerbournonsceenshot.png',
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea autem quibusdam eius itaque quis praesentium voluptates nulla. Aut consectetur et modi corrupti consequatur! Et, voluptatum placeat! Eius, repellat fuga."
                },
                {
                    id: 2,
                    name: 'Work Events',
                    image: '../../public/assets/image/treinanniversary.JPG',
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea autem quibusdam eius itaque quis praesentium voluptates nulla. Aut consectetur et modi corrupti consequatur! Et, voluptatum placeat! Eius, repellat fuga."
                }
            ]
        };
    }

    render() {
        const directory = this.state.events.map(event => {
            return (
                <div key={event.id} className="col">
                    <img src={event.image} alt={event.name} />
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
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