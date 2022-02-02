import React from 'react'

const Offer = ({src,link,index}) => {
    return  <a className='col-sm-4 p-sm-0' href={link}>
                <img className='img-fluid d-block m-auto' src={src} alt={`${index} offer`} />
            </a>
    
}

export default Offer
