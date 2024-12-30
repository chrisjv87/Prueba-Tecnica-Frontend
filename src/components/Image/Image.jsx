import React from "react";

const Image = ({ src, alt, ...props }) => {
  return(
    <img 
      src={`${process.env.PUBLIC_URL}/${src}`}
      alt={alt}
      {...props}
    />
  );
}

export default Image;