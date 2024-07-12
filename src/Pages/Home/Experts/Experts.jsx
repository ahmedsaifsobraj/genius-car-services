import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';
import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-3.jpg';
import expert4 from '../../../Images/experts/expert-4.jpg';
import expert5 from '../../../Images/experts/expert-5.jpg';
import expert6 from '../../../Images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = (props) => {
    const experts =
        [
            { id: 1, name: 'John', img: expert1 },
            { id: 2, name: 'Steven', img: expert2 },
            { id: 3, name: 'Jack', img: expert3 },
            { id: 4, name: 'Niel', img: expert4 },
            { id: 5, name: 'Noah', img: expert5 },
            { id: 6, name: 'Mack', img: expert6 }
        ]
    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-5'>Our Experts</h1>
            <Row xs={1} sm={2} md={3} className="g-4">
                
                    
                        {
                            experts.map(expert => <Col key={expert.id}><Expert key={expert.id} expert={expert}></Expert></Col>)
                        }
                    
            
            </Row>

        </div>
    );
};

export default Experts;