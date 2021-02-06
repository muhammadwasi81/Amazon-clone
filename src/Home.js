import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image  img-fluid"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <div class="col-6">
          <Product
            id="12345"
            title="Amazon TV Remote for amazon devices"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
          />
        </div>
        <div class="col-6">
          <Product
            id="12345"
            title="Audionic Buffer Speaker"
            price={220}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
        </div>
      </div>

      {/* <div className="home__row"> */}
      <div className="container">
        <div className="row">
          <div className="col-4"> 
          <Product
          id="12345"
          title="Bluetooth Speakers || Amazon Best"
          price={11.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
          </div>
          <div className="col-4">
          <Product
          id="12345"
          title="Bluetooth Speakers || Amazon Best"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
          </div>
          <div className="col-4">
          <Product
          id="12345"
          title="Bluetooth Speakers || Amazon Best"
          price={250}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
          </div>
        </div>
      </div>
      <div className="container">
      <Product
          id="89457"
          title="Panasonic Smart TV"
          price={220}
          rating={5}
          image="https://brain-images-ssl.cdn.dixons.com/7/8/10195287/l_10195287_018.jpg"
        />
       </div>
     </div>
    
  );
}

export default Home;
