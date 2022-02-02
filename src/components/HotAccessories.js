import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'


const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover }) => {
    return (
        <Container>
            <div className="HotAccessories row">

                <div className='col-sm-4'>
                    <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="Cover" />
                </div>


                {/* -----------2nd */}
                <section className='col-sm-8'>
                    <div className='row'>


                        {music && music.map((item, index) => (
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                        ))}

                        {smartDevice && smartDevice.map((item, index) => (
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                        ))}

                        {home && home.map((item, index) => (
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                        ))}

                        {lifeStyle && lifeStyle.map((item, index) => (
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                        ))}

                        {mobileAccessories && mobileAccessories.map((item, index) => (
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

                        ))}

                        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
                    </div>

                </section>

            </div>
        </Container>
    )
}

export default HotAccessories
