import React, { useState, useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { db } from "../firebase.config";
import "../styles/slider.css";
import {
    collection,
    getDoc,
    query,
    orderBy,
    limit,
    getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Spinner from "./Spinner";

const Slider = () => {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigat = useNavigate();

    useEffect(() => {
        const fetchListings = async () => {
            const listingRef = collection(db, "listings");
            const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
            const querySnap = await getDocs(q);
            let listings = [];
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });
            setLoading(false);
            setListings(listings);
        };
        fetchListings();
        console.log(listings === null ? "loading" : listings);
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />;
    }
    return (
        <>
            <div style={{ width: "100%" }}>
                {listings === null ? (
                    <Spinner />
                ) : (
                    <Carousel className="mySwipe" justify-content-center>
                        {listings.map(({ data, id }) => (
                            <Carousel.Item interval={2000} key={id} onClick={() => {
                                navigat(`/category/${data.type}/${id}`);
                            }}>
                                <img
                                    src={data.imgUrls[0]}
                                    alt={data.name}
                                    className="slider-img"
                                />
                                <h4 className=" text-dark p-4 m-0 ">
                                    <ImLocation2 size={20} className="ms-2" /> Recently Added :{" "}
                                    <br />
                                    <span className="ms-4 mt-2"> {data.name}</span>
                                    <span className="ms-2">
                                        | Price ( Rs {data.regularPrice} )
                                    </span>
                                </h4>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </div>
        </>
    );
};

export default Slider;