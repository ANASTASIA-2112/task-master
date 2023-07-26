import React from "react";

export function pageTitle(props: any) {
    console.log("AppTitle rendering")
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

