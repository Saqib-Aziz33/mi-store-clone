import React from 'react'
import VideoCard from "./VideoCard.js"
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const Videos = ({videos}) => {
    return (
        <Container>
            <div className="videos">
                <div className='row'>
            {
                 videos.map((item,index)=>(
                <VideoCard  index={index} key={item.image} image={item.image} name={item.name}/>
                ))
            }
            </div>
        </div>
        </Container>

    )
}

export default Videos
