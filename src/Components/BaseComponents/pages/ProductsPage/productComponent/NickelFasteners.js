import React from 'react'
import Products from '../Products'
import { FastenersImgData } from '../../../../../Constants/Data/OfferData'
import Contact_btn from '../../../contact_btn'
import img1 from '../../../../../Constants/Images/productsScreenImg/nut_bolt.jpg'
import bgimg from '../../../../../Constants/Images/fasteners/bgimg.jpg'
const NickelFasteners = () => {
  window.scrollTo({
    top: 800, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
  var heading='Contact Modi Metals for Nickel Alloys Fasteners Materials Today'
  var text='Contact us for more information regarding our Nickel Alloys Fasteners material options, or request a quote for further pricing details today. Modi Metals is your trusted Nickel Alloys Fasteners supplier and manufacturer of premium Nickel Alloys Fasteners materials.'
  return (
    <>
    <Products message={{text_heading:"Nickel Alloys Fasteners",img:bgimg}}/>
    <div className="products_type">
    <div className="stainless_steel">
      <h2 className="">Nickel Alloy Fasteners</h2>
      <p>Nickel Alloy Fasteners are the type of fasteners that are designed from nickel content in which it includes additional content such as chromium, copper and iron content. These grade of fasteners are heat and corrosion resistance fasteners that are widely used in various applications. The fasteners possess low thermal expansion and exhibit predictable and uniform expansion over certain temperature ranges. Furthermore, these exhibits good resistance to carburization and oxidation at the temperature exceeding 760 degrees C. 

        </p>
        <p>
        The fasteners facilitate superior resistance in chemical reducing circumstances and in sea water also. Therefore these lead to higher strength, ductility, and toughness at high-temperature circumstances. In addition to these fasteners features superb magnetic and mechanical properties. Thus these are capable to withstand in a hostile environment.           
        </p>
      <div className="use_cases">
        <h3>Industries We Serve</h3>
        <p>
        Nickel Alloy Fasteners materials provide a wide range of beneficial qualities to industries throughout the world. The majority of which involve corrosion resistance and/or heat resistance. Some of these include:
        </p>
        <h4>
          <i class="fa-solid fa-caret-right  mx-2"></i>A few industries that
          use Nickel Alloy Fasteners extensively:
        </h4>
        <div className="gellary_carbon row mt-5">
            {FastenersImgData.map((item) => {
              return (
                <>
                  <div className="col-12 col-md-4 images_class fastenrs">
                    <img className="" src={item.img} alt=""></img>
                   <h4 className='mt-2'>{item.heading}</h4>
                  </div>
                </>
              );
            })}
          </div>
      </div>
      <div className="use_cases">
        <h3>Nickel Alloy Fasteners Material Available Formats</h3>
        <p>
        Modi Metals offers pure Nickel Alloy Fasteners materials in a variety of forms, including:
        </p>
        <div className="row w-100  mt-4 t">
          <h5 className="col-md-4 align-baseline">
            <i class="fa-solid fa-circle   mx-3"></i>Nickel Alloy Nuts
          </h5>
          <h5 className="col-md-4 align-baseline">
            <i class="fa-solid fa-circle  mx-3"></i>Nickel Bolts
          </h5>
          <h5 className="col-md-4 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>High Nickel Alloy Washer
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i> Nickel Alloy Studs  
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>High Nickel Screw
          </h5>
          
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Square Nut
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>High Nickel Alloy Socket Head Cap Screw
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Machine Screw
          </h5>

          <h5 className="col-md-4 align-baseline">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Wing Screw Supplier  
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i> Nickel Coupling Nuts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Allen Cap Screw Wholesaler
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Machine Screws
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Split Lock Washers
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>High Nickel Alloy Socket Head Cap Screw
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Fasteners Stockist
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel U Bolts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Slotted Nuts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>High Nickel Alloy Ogee Washers
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Cap Nuts 
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Hex Nuts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Eye Bolt Exporter
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Pan Head Screw Manufacturer
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Stud Bolts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy T-Head Bolts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>High Nickel Alloy T-Head Bolts
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Socket Hexagon Head Screw
          </h5>
          <h5 className="col-md-4">
            <i class="fa-solid fa-circle mx-3"></i>Nickel Alloy Cap Screw Suppliers
          </h5>
        </div>
      </div>
 
    </div>
    {/* <!-- newsletter  --> */}

    <Contact_btn  content={{heading:heading,text:text}}/>

   
    </div>
    </>
  )
}

export default NickelFasteners