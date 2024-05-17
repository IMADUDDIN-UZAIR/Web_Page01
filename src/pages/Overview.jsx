import React from 'react'
import img from './Group.png';
const Overview = () => {
  return (
    <div className='bg-black '>
      <div className="main   text-center items-center pt-40">
        <div className="subdiv  font-bold text-blue-800 ">
        Simple pricing for your business
        </div>
        <div className="subsub text-white">Plans that are carefully crafted to suit your business.</div>
      </div>

      <div className="img flex justify-end mr-40 pt-20">
        <img className=' w-96 h-68' src={img} alt="" />
      </div>

  
     {/* <div className="page bg-white border-[#367CFF] size-96 mt-40 flex justify-center py-10 ml-96  border-8 rounded-2xl">
    
        <div className="dolor bg-blue-800 text-[#FFFFFF]  size-20 -space-top-40 rounded-full ml-28  text-center items-center ">$365</div>
        <div className="head text-[#367CFF] font-4xl font-bold mt-20 felx justify-center items-center border-blue-600">Premium PRO</div>
       
        </div> */}



<div className='text-[#367CFF]  font-bold w-80 h-auto relative bg-white mt-20 mx-auto border-8  rounded-xl border-[#367CFF]' > 
   <div className='flex flex-col justify-center items-center py-2 gap-4 px-8'>
   <h1 className='bg-[#367CFF] w-24 h-16 rounded-full flex items-center justify-center  '>$329</h1>
    <h2 className='font-bold text-2xl text-[#367CFF]'>Premium PRO</h2>
    <p>billed just once</p>
    <p>Access these features when you get this pricing package for your business.</p>
    <ul>
      <li>International calling and messaging API</li>
      <li>Additional phone numbers</li>
      <li>Automated messages via Zapier</li>
      <li>24/7 support and consulting</li>
    </ul>
   </div>
        <div className="btn bg-[#367CFF] text-[#FFFFFF] m-8 p-3 font-bold text-2xl  rounded-xl text-center items-center]">
        Buy Now
        </div>
    </div>


     </div>








  )
}

export default Overview
