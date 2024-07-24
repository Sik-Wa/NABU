import { Link } from "react-router-dom";
import nabu from '../../assets/nabu.jpg'
import read from '../../assets/read.jpg'
const Hero = () => {
  return (
    <div className="   items-center  justify-center   ">
      <div className="flex-col flex items-center justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-4 mt-0 w-full items-center justify-center ">
          <div style={{backgroundImage:`url(${nabu})`}}
           className=" rounded-[40px] w-full bg-contain object-fill bg-center col-span-1
            md:col-span-4 md:text-6xl  border shadow shadow-gray-900 h-80   md:h-[500px]">
            
          </div>
        </div>
      </div>

      <div className=" mt-10 flex flex-col items-center justify-center">
        <div className=" flex-row">
          <div className=" grid grid-cols-1 gap-2 md:grid-cols-4 ">
            <div className="col-span-1 md:col-span-2 break-all">
              <h1 className=" text-center font-medium ">A better way to teach <br />
            
                 <span className=" text-lg font-bold"> Creates a greater yearn to learn  </span></h1>
              <p className=" font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nisi itaque reprehenderit accusamus iure ad vitae
                soluta recusandae dolorum dolore eligendi, ex nesciunt. Enim
                natus voluptas aliquam libero. Ratione temporibus debitis itaque
                optio eaque veritatis nemo alias iusto velit quia, beatae,
                tempora asperiores eum consequuntur voluptas! Sit neque est in?
                <br />
                <span className="flex mt-2">
                  <Link className=" text-base font-normal
                   bg-black text-white  border py-1 px-3">
                    Read more
                    </Link>
                    </span>
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 break-all">
            <h1 className=" text-center font-medium ">Literacy is the backbone of <br />
            
                 <span className=" text-lg font-bold">  Ecconomic development</span></h1>
              <p className=" font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nisi itaque reprehenderit accusamus iure ad vitae
                soluta recusandae dolorum dolore eligendi, ex nesciunt. Enim
                natus voluptas aliquam libero. Ratione temporibus debitis itaque
                optio eaque veritatis nemo alias iusto velit quia, beatae,
                tempora asperiores eum consequuntur voluptas! Sit neque est in?
                <br />
                <span className="flex mt-2">
                  <Link className=" text-base font-normal
                   bg-black text-white  border py-1 px-3">
                    Read more
                    </Link>
                    </span>
              </p>
            </div>
            {/* <div className="col-span-1 md:col-span-2 shadow  shadow-red-900 h-64"></div> */}
          </div>
        
        </div>
      
     
          </div>
          <div className=" mt-6 gap-y-3 flex flex-col items-center justify-center">
       
       <h1 className=" bottom-10 text-lg font-semibold">CHECK US OUT </h1>
       <div className=" grid grid-cols-1 gap-2 md:grid-cols-4 mt-4 w-full items-center justify-center ">
       <div style={{backgroundImage:`url(${read})`}}
        className="  rounded-[40px]  w-full bg-contain  object-cover  bg-center col-span-1 md:col-span-2
         shadow shadow-red-900 h-64 md:h-[300px]">

         </div>
       <div className=" rounded-[40px]  col-span-1 md:col-span-2 w-full shadow  shadow-red-900 h-64 md:h-[300px]"></div>
       <div className=" rounded-[40px]  col-span-1 md:col-span-4 w-full shadow  shadow-red-900 h-64 md:h-[400px]"></div>
       <div className=" rounded-[40px]  col-span-1 md:col-span-2 w-full shadow  shadow-red-900 h-64 md:h-[300px]"></div>
       <div className=" rounded-[40px]  col-span-1 md:col-span-2 w-full shadow  shadow-red-900 h-64 md:h-[300px]"></div>
       <div className=" rounded-[40px]  col-span-1 md:col-span-4 w-full shadow  shadow-red-900 h-64 md:h-[400px]"></div>
       
       </div>
      </div>
      <div className=" mt-4 border border-gray-600 w-full h-0.5"></div>
      <div className=" mt-6 flex justify-between ">
        <Link to='/login'
         className=" rounded-[40px]  border border-white py-2 px-3 text-blue-500
         bg-white hover:bg-black text-lg font-medium  ">Login</Link>
        <Link to='/HomePage'
         className=" rounded-[40px]  border border-gray-300 py-2 px-3 font-semibold bg-black
         text-white hover:text-blue-600 transition-colors
          duration-500 hover:bg-white ">Create  NABU Account</Link>
      </div>
      </div>
  
  );
};

export default Hero;
 

{
  /* <div>
<div style={{backgroundImage:`url(${image5})`}} className="col-span-2 w-full bg-cover object-cover bg-center h-96
           rounded-[40px] group relative shadow shadow-[#d47a54] overflow-hidden" >
          <div className=" w-full flex flex-col absolute -bottom-full p-4 group-hover:bottom-0 
          delay-150 duration-500 bg-[#d47a54] overflow-hidden">
             <p className=" text-lg font-bold ">Lorem ipsum dolor sit amet.</p>
             <p className=" text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Odit similique ipsa ipsam. Facilis iusto placeat amet. Voluptas qui porro fuga.
             </p>
             <Link className=" px-2 py-2 rounded font-semibold text-lg md:text-xl
              bg-black text-white hover:bg-white hover:text-black" to='/Blog'>Click</Link>
          </div>
          <Link to='/Home' className=" font-serif text-xl text-white ">Afro <br/>
          <span className=" text-2xl font-mono">King & Queen</span></Link>
          </div>
</div> */
}
