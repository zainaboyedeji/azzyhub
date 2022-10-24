import React from "react";
import "./reviews.scss";
import { RiDoubleQuotesL } from "react-icons/ri";
import ratingsImage from "../../assets/images/ratingsImg.png";

const Reviews = () => {
    const reviewsList = [
        {
            id: "1",
            product: "PINK TOP",
            name: "Zainab Oyedeji",
            review: "These are uniquely beautiful.",
            img: "https://cdn-images.farfetch-contents.com/16/38/99/82/16389982_31583621_300.jpg",
        },
        {
            id: "2",
            product: "BLUE DRESS",
            name: "Kofo Azeez",
            review: "So pocket friendy and cute.",
            img:
                "data:image/jpeg;base64,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",
        },
        {
            id: "3",
            product: "RED BAG",
            name: "Adeleke David",
            review: "Loved this bag.",
            img:
                "data:image/jpeg;base64,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",
        },
    ];
    return (
        <div className="appReviews">
            <h6>LATEST PRODUCT REVIEWS</h6>
            <div className="reviews d-flex w-100 justify-content-between">
                {reviewsList.map((reviews) => {
                    return (
                        <div key={reviews.id} className="review d-flex">
                            <div className="reviewImg">
                                <img src={reviews.img} alt={reviews.product} />
                            </div>
                            <div className="reviewRating">
                                <img src={ratingsImage} alt="ratingsImg" />
                                <h6 className="mt-2">{reviews.product}</h6>
                                <div className="d-flex">
                                    <RiDoubleQuotesL />
                                    <p className="mt-1">{reviews.review}</p>
                                </div>
                                <h6 className="mt-2">-{reviews.name}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;
