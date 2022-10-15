import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import "./App.css";
import SimpleImageSlider from "react-simple-image-slider";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const images = [
    {
      url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
    },
    {
      url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
    },
    {
      url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
    },
    {
      url: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg",
    },
  ];

  return (
    <div className="App">
      <div className="Navbar">
            <div className="back">
        <span>
        <AiOutlineArrowLeft  size={29}/>
          </span>
          </div>
          <div className="searchbar  position-relative">
          <BsSearch className="position-absolute" style={{top:5}} size={22} />
            <input type="text" placeholder="Seaarch On Mazindia"  className="ps-5"/></div>
       
        <div className="cart position-relative ">
        <FaShoppingCart className="mt-3 me-3" size={26}/>
        <div className="item"style={{
          height:20,
          width:20,
          backgroundColor:'orange',
          borderRadius: '50%',
          position:"absolute",
          top:0,
          right:0
        }} >
          1
        </div>
        
        </div>
        
      </div>
      <div className="share m-4">
      <BsFillShareFill />
      </div>
      <div className="Carousel">
        <SimpleImageSlider
          width={275}
          height={450}
          images={images}
          showBullets={true}
          // showNavs={true}
        />
      </div>
      <div className="like m-4">
      <FiHeart size={25}/>
      </div>
      <hr />
      <br />
      <div className="price m-4"> 
        <h6 className="IP">I Phone 14 Pro max(256GB)(8 GB RAM)</h6>
        <div className="d-flex gap-2">
        <div>
        <p>
          <strike>1,30,999</strike>
        </p></div>
        <div>
          <h6>1,30,999</h6>
        </div>
        </div>
      </div>
      <hr />

      <br />
      <div className="Discription m-4">
        <h3>Discription</h3>
        <p className="pera ">
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias
          desde el año 1500, cuando un impresor (N. del T. persona que se dedica
          a la imprenta) desconocido usó una galería de textos y los mezcló de
          tal manera que logró hacer un libro de textos especimen. No sólo
          sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
          documentos electrónicos, quedando esencialmente igual al original. Fue
          popularizado en los 60s con la creación de las hojas "Letraset", las
          cuales contenian pasajes de Lorem Ipsum, y más recientemente con
          software de autoedición, como por ejemplo Aldus PageMaker, el cual
          incluye versiones de Lorem Ipsum.
        </p>
      </div>
      <hr />
      
        <div className="Information m-4">
          <h3>Information</h3>
          <p className="info">
          Lorem Ipsum ha sido el texto de relleno estándar de las industrias
          desde el año 1500, cuando un impresor (N. del T. persona que se dedica
          a la imprenta) desconocido usó una galería de textos y los mezcló de
          tal manera que logró hacer un libro de textos especimen. No sólo
          sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
          documentos electrónicos, quedando esencialmente igual al original. Fue
          popularizado en los 60s con la creación de las hojas "Letraset", las
          cuales contenian pasajes de Lorem Ipsum, y más recientemente con
          software de autoedición, como por ejemplo Aldus PageMaker, el cual
          incluye versiones de Lorem Ipsum.
        </p>
        </div>
        <hr />
        <div className="Review m-4">
          <div>
          <h3>Review</h3>
          </div>
          <div>
          <h5>Akash khurana</h5>
          <p>	⭐	⭐	⭐	⭐ 4/5</p>
          <p className="review">super quality And best Service</p>
          </div>
          <div>
          <h5>Akash khurana</h5>
          <p>	⭐	⭐	⭐	⭐ 4/5</p>
          <p className="review">super quality And best Service</p>
          </div>
          <div>
          <h5>Akash khurana</h5>
          <p>	⭐	⭐	⭐	⭐ 4/5</p>
          <p className="review">super quality And best Service</p>
          </div>
          
        </div>
            
          <div className="but d-flex gap-5 m-4">
            <div>
            <button  type="button" class="btn btn-outline-warning">ADD TO CART</button>
            </div>
            <div>
            <button type="button" class="btn btn-warning">BUY NOW</button>
            </div>
          
          
          </div>
      </div>
    
  );
}

export default App;
