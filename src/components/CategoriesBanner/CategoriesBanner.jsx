import React from 'react'
import CategoryBanner from "../../assets/images/categoriesbanner.gif"
import ClothingBanner from "../../assets/images/clothingbanner.jpeg"
import ShoeBanner from "../../assets/images/shoesbanner.jpeg"
import JewelleryBanner from "../../assets/images/jewellerybanner.jpeg"
import BagBanner from "../../assets/images/bagsbanner.jpeg"
import "./categoriesbanner.scss"


const CategoriesBanner = () => {
    return (
        <>
            <div className='categoriesBanner'>
                <img src={CategoryBanner} alt="categoryBanner" />
            </div>
            <div className="categoryContainer container">
                <div className="row">
                    <div className="col"><img src={ClothingBanner} alt="clothingBanner" /></div>
                    <div className="col"><img src={ShoeBanner} alt="shoeBanner" /></div>
                    <div className="w-100"></div>
                    <div className="col"><img src={JewelleryBanner} alt="jewelleryBanner" /></div>
                    <div className="col"><img src={BagBanner} alt="bagBanner" /></div>
                </div>
            </div>
        </>
    )
}

export default CategoriesBanner