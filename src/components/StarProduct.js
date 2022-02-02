import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'


const StarProduct = ({starProduct}) => {
    return (
        <Container>
            <div className="row justify-content-center">
                <div className='col-sm-6 p-0'> <a href={starProduct[0].url}> <img className='img-fluid d-block m-auto' src={starProduct[0].image} alt="1st Product" /></a></div>
                <div className='col-sm-6 p-0'>
                    <Container>
                    <div className='row'>
                        <a className='col-sm-6 p-0' href={starProduct[1].url}> <img className='img-fluid d-block m-auto' src={starProduct[1].image} alt="1st Product" /></a>
                        <a className='col-sm-6 p-0' href={starProduct[2].url}> <img className='img-fluid d-block m-auto' src={starProduct[2].image} alt="1st Product" /></a>
                        <a className='col-sm-12 p-0' href={starProduct[3].url}> <img className='img-fluid' src={starProduct[3].image} alt="1st Product" /></a>
                    </div>
                    </Container>
                </div>
            </div>
        </Container>
    )
}

export default StarProduct
