import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import SingleCard from './SingleCard';

const CopyCard = () => {
    const [texts, setTexts] = useState([]);
    useEffect(() => {
        fetch('text.json')
            .then(res => res.json())
            .then(data => setTexts(data))
    }, []);

    return (
        <div>
            <Container fluid>
                <Button className='write-btn'>Write for me</Button>
                <p className='text-end'>
                    <Button variant="light" className='text-danger'>Clear</Button>
                </p>

                <div>
                    {
                        texts.map(text => <SingleCard
                            text={text}
                        ></SingleCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default CopyCard;