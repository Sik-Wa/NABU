const Hero = () => {
  return (
    <div className="   items-center  justify-center ">
      <div className="flex-col flex items-center justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-4 mt-0 w-full items-center justify-center ">
          <div className=" col-span-1 md:col-span-4 md:text-6xl  border shadow shadow-gray-500 h-64   md:h-[500px]">
            <div className=" gap-6">
              <h1 className=" flex items-center  bottom-3 justify-center">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className=" break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eaque!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 flex flex-col items-center justify-center">
        <div className=" flex-row">
          <div className=" grid grid-cols-1 gap-2 md:grid-cols-4 ">
            <div className=" col-span-2 break-all">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nisi itaque reprehenderit accusamus iure ad vitae
                soluta recusandae dolorum dolore eligendi, ex nesciunt. Enim
                natus voluptas aliquam libero. Ratione temporibus debitis itaque
                optio eaque veritatis nemo alias iusto velit quia, beatae,
                tempora asperiores eum consequuntur voluptas! Sit neque est in?
              </p>
            </div>
            <div className=" col-span-2 shadow  shadow-red-900 h-64"></div>
          </div>
          <div className=" mt-10 col-span-2 ">
          <div className=" border shadow shadow-red-900 h-60 col-span-2"></div>

          <div className=" border shadow shadow-red-900 h-60 col-span-2"></div>
        </div>
        </div>
      
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
