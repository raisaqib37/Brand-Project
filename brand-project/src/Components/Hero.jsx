function HeroSection() {
  return (
    <div className="main">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btns">
            <button>Shop Now</button>
            <button className="category">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
         <div className="imgs"> <img src="images/Flipkart.png" alt="flipkart here"/>
          <img src="images/Amazon.png" alt="amazon here"/>
          </div></div>
      </div>
      <div className="hero-image">
        <img src="images/shoe.png" alt="shoe image here"/>
      </div>
    </div>
  );
}
export default HeroSection;