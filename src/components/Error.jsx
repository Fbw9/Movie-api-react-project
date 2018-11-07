import React from "react";

const Error = prop => {
    if(prop.message && typeof(prop.message) === "string"){

        return (
            <div>
                <h2>ERROR!</h2>
                <p>{prop.message}</p>
            </div>
        )
    }  else {
        console.log("Error: your error message has to be a string");
        return ""
    }
}

export default Error;