const Heropage = () => {
  return (
    <div className=" min-h-screen  w-full flex flex-col   ">
      <div className="flex  items-center justify-center">
        <div
          className=" grid grid-cols-2 gap-2   md:grid-cols-4 lg:grid-cols-4 
       mt-0 w-full items-center justify-center "
        >
          <div
            className=" mb-5 w-full bg-contain object-fill bg-center col-span-2
            md:col-span-4 md:text-6xl  border shadow shadow-gray-900 h-80   md:h-[500px]"
          ></div>

          <div className=" h-10 col-span-2 md:col-span-4 lg:col-span-4">
            <h2 className=" text-white text-lg font-bold flex items-center justify-center underline">
              CHECK OUT OUR LESSONS
            </h2>
          </div>

          <div className=" h-60 col-span-1 rounded-[10px]  border md:col-span-1 lg:col-span-1"></div>
          <div className=" h-60 col-span-1 rounded-[10px] border md:col-span-1 lg:col-span-1"></div>
          <div className=" h-60 col-span-1 rounded-[10px] border md:col-span-1 lg:col-span-1"></div>
          <div className=" h-60 col-span-1 rounded-[10px] border md:col-span-1 lg:col-span-1"></div>
        </div>
      </div>
      <button className=" mt-2 text-sm text-white underline flex items-end justify-end  right-2">
        See all our courses
      </button>
      <div className="text-white flex flex-col mb-4">
      <h3  className="text-white underline flex items-center justify-center mt-3 font-semibold">
        WHY YOU SHOULD WORK WITH US</h3>
      <div>
        
        <div className=" mt-3 flex  items-center justify-center ">
          <div className=" font-medium text-base flex flex-col md:flex-row gap-2 md:gap-10 ">
               
             <h4 className=" border shadow py-2 px-3">Interactive Learning</h4>
             <h4 className=" border shadow py-2 px-3">Experinced Teachers</h4>
             <h4 className=" border shadow py-2 px-3">Flexible Timings</h4>
             <h4 className=" border shadow py-2 px-3">Online Lessons</h4>
             <h4 className=" border shadow py-2 px-3">Physical Lessons</h4>
          </div>
        </div>
      </div>
      </div>
      <h3  className="text-white  underline flex items-center justify-center mt-3 font-semibold">
      WHAT OUR CLIENTS SAY ABOUT US</h3>
      <div>
        <div  className=" grid grid-cols-2 gap-2   md:grid-cols-4 lg:grid-cols-4 
       mt-0 w-full items-center justify-center ">
  <div className=" h-60 col-span-1 rounded-[10px]  border md:col-span-1 lg:col-span-1"></div>
          <div className=" h-60 col-span-1 rounded-[10px] border md:col-span-1 lg:col-span-1"></div>
          <div className=" h-60 col-span-1 rounded-[10px] border md:col-span-1 lg:col-span-1"></div>
          <div className=" h-60 col-span-1 rounded-[10px] border md:col-span-1 lg:col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
