import React from "react";

const Title = ({ title, subTitle, align, font }) => {
    return (
        <div className={`mb-6 ${align === "center" ? "text-center" : "text-left"}`}>
            <h1 className={`text-2xl font-playfair font-medium text-gray-800 mb-4 ${font || "font-playfair"} ${align === "center" ? "text-center" : "text-left"}`}>
                {title}</h1>
                {subTitle && <p className={`text-lg text-gray-600 ${font || "font-playfair"}`} >{subTitle}</p>}
            
        </div>
    );
} 

export default Title;