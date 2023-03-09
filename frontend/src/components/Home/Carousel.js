import React from 'react'

export default function Carousel() {
  return (
    <>
     <div className="carousel fade-carousel slide" data-ride="carousel" data-interval={4000} id="bs-carousel">
        {/* Overlay */}
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#bs-carousel" data-slide-to={0} className="active" />
          <li data-target="#bs-carousel" data-slide-to={1} />
          <li data-target="#bs-carousel" data-slide-to={2} />
        </ol>
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item slides active">
            <div className="slide-1">
              <div className="overlay" />
            </div>
            <div className="hero">
              <hgroup>
                <h1>We are creative</h1>        
                <h3>Get start your next awesome project</h3>
              </hgroup>
              <button className="btn btn-hero btn-lg" role="button">See all features</button>
            </div>
          </div>
          <div className="item slides">
            <div className="slide-2">
              <div className="overlay" />
            </div>
            <div className="hero">        
              <hgroup>
                <h1>We are smart</h1>        
                <h3>Get start your next awesome project</h3>
              </hgroup>       
              <button className="btn btn-hero btn-lg" role="button">See all features</button>
            </div>
          </div>
          <div className="item slides">
            <div className="slide-3">
              <div className="overlay" />
            </div>
            <div className="hero">        
              <hgroup>
                <h1>We are amazing</h1>        
                <h3>Get start your next awesome project</h3>
              </hgroup>
              <button className="btn btn-hero btn-lg" role="button">See all features</button>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}
