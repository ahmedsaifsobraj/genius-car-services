import React from 'react';
import Card from 'react-bootstrap/Card';
const Expert = ({ expert }) => {
    const {name, img } = expert;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
    );
};

export default Expert;