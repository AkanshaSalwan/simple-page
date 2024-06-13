const HeroSection = () => {
    return <main className="hero container">
        <div className="hero-content">
           <h1>YOUR FEET DESERVE THE BEST</h1>
           <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
             SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
             </p>

             <div className="hero-btn">
                <button type="button">Shop Now</button>
                <button type="button" className="secondary-btn">Category</button>
             </div>
             
             <div className="shopping">
                <p>Also Available On</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo"/>
                    <img src="/images/flipkart.png" alt="flipkart-logo"/>
                </div>
             </div>

       </div>
        <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-logo"/>
        </div>
    </main>
};

export default HeroSection;