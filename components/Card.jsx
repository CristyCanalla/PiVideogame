import React from "react";
import { Link } from "react-router-dom";


export default function Card({ name, image, genres, id, ratings }) {
    return (
        <Link to={`/videogame/${id}`}>
            < div className="Card" >
                <br />
                <h1 className="title">{name}</h1>
                <h2>{genres + " "}</h2>
                <h3>{ratings}</h3>
                <img src={image} alt="Not Found" border="5px" className="center" />
            </div >
        </Link>
    )
}