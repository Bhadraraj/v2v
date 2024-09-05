import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";          // Import slick-carousel base styles
import "slick-carousel/slick/slick-theme.css";    // Import slick-carousel theme styles

function DemoCarosole() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                            <div>
                                <h3>7</h3>
                            </div>
                            <div>
                                <h3>8</h3>
                            </div>
                            <div>
                                <h3>9</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DemoCarosole;
