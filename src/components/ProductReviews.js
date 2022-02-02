import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"
import { Container } from 'react-bootstrap'

const ProductReviews = ({productReviews}) => {
    return (
        <Container>
            <div className="row">
           
                {productReviews.map((item,index)=>(
        
                <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
        
        
                ))}
                
           </div>
        </Container>
    )
}

export default ProductReviews
