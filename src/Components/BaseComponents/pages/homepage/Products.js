import React from 'react'
import './Products.css'
import ProductsSlider from'./ProductsSlider'

const Products = () => {
  return (
      <section id="products_sections">
    
<div className='container-fluid poducts_heading' style={{marginTop:"50px"}}>
<div className="heading " >
    <div className="line_before"></div>
    <h3 className="headinng_text">PRODUCTS RANGE</h3>
    <div className="line_after"></div>
  </div>
   
    <h4>Inconel, Incoloy®, Monel, Hastelloy®, Duplex® <br/> are Registered Trade Marks of their Respecetive Owners.</h4>
    </div>
<ProductsSlider/>
    {/* <div className='row d-flex align-items-center justify-content-center'>
<div className='col-md-5 products_cart'></div>
<div className='col-md-5 products_cart'></div>

    </div> */}
   

</section>
  )
}

export default Products