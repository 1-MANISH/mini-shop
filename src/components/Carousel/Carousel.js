import React from "react";
import { Carousel } from "antd";
import './Carousel.css'

function Carousels() {
  const contentStyle = {
    margin: 0,
    height: "490px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",

  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div >
        <h3 style={contentStyle}>
            <img style={{width:"100%"}} src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
            <img style={{width:"100%"}} src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img style={{width:"100%"}} src="https://images.unsplash.com/photo-1583922606661-0822ed0bd916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        <img style={{width:"100%"}} src="https://media.istockphoto.com/id/1337300784/photo/friends-shopping-for-perfect-dres.jpg?b=1&s=170667a&w=0&k=20&c=kWA6y4BgcV4PJLrcZFfSf5CTew3gCPEImggMlUYueHw=" alt="" />
        </h3>
      </div>
    </Carousel>
  );
}

export default  Carousels;
