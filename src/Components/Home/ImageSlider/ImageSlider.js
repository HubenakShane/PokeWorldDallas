import React from 'react';
import caroudel1 from '../../../creative-agency/images/carousel-1.png';
// allow your pictures to be explored.
import caroudel2 from '../../../creative-agency/images/carousel-2.png';
//allow your pictures to explore your creativity.
import caroudel3 from '../../../creative-agency/images/carousel-3.png';
// Create new pictures that allow your creativity to be explored.
import './ImageSlider.css'
const ImageSlider = () => {
    return (
        <section style={{backgroundColor: "#111430", height: "600px" }}>
            <div className="text-center pt-5">
                    <h2 className="text-white">Featured Items <span style={{color:"#7AB259"}}></span></h2>
            </div>
            <div className="container px-5 py-5">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={caroudel1} class="d-block img-fluid centerCarousel" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={caroudel2} class="d-block img-fluid centerCarousel" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={caroudel3} class="d-block img-fluid centerCarousel" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            </div>
            
        </section>
    );
};

export default ImageSlider;