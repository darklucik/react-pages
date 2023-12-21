import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({path, text}) => {
    return (
        <Link to={path}>
            <button>{text}</button>
        </Link>
    )
}