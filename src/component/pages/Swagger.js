import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const Swagger = () => {
    return (
        <div>
            <SwaggerUI url = "swagger.yaml"/>
        </div>
    );
};

export default Swagger;