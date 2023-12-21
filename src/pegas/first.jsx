import React from "react";
import { LinkButton } from "../component/link";
import '../index.css'


export const First = () => {
    return (
        <div>
            <h1>First</h1>
        <LinkButton path="/second" text="next"/>
        </div>
        
        
    )
}
