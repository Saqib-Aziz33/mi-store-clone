import React from 'react'
import Offer from "./Offer.js"
import { Container } from 'react-bootstrap'
import "../styles/Offers.css"
import 'bootstrap/dist/css/bootstrap.min.css'


const Offers = ({offer}) => {
    return (
        <Container>
            <div className="row justify-content-center mt-4">
                {offer.map((item, index) => (
                    <Offer key={item.image} index={index} src={item.image} link={item.url} />
                ))}
            </div>
        </Container>
    )
}

export default Offers
