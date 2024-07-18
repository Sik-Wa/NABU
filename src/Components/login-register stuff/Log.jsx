import { Link } from "react-router-dom";



const Log = () => {
  return (
    <div>
      <div    className="  bg-slate-800 border border-slate-400 rounded-md 
    p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative ">
        <h1 className=" text-4xl text-white font-bold text-center mb-6">login</h1>
        <form action="">
        <div className=" relative my-4">
          <input type="text" className="block w-72 py-2.3
           px-0 text-sm text-black
           bg-transparent border-0 border-b-2 border-gray-300 appearance-none
            dark:focus:border-blue-500 focus:outline-none focus:text-white
             focus:border-blue-600 peer" />
          <label htmlFor="" className=" absolute text-sm text-white duration-300
           transform -translate-y-6 scale-75 top-3
           -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
            peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100
             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
              </label>
        </div>

        <div className="relative my-4">
          <input type="email"className="block w-72 py-2.3 px-0 text-sm text-white
           bg-transparent border-0 border-b-2 border-gray-300 appearance-none
            dark:focus:border-blue-500 focus:outline-none focus:text-white focus:border-blue-600 peer"/>
          <label htmlFor=""  className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3
           -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
            peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100
             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
             email
             </label>
        </div>
        <div className="relative my-4">
          <input type="password" className="block w-72 py-2.3 px-0 text-sm text-white
           bg-transparent border-0 border-b-2 border-gray-300 appearance-none
            dark:focus:border-blue-500 focus:outline-none focus:text-white focus:border-blue-600 peer"/>
          <label htmlFor=""  className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3
           -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
            peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100
             peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
             password
             </label>
        </div>
        <div className=" flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <input type="checkbox" name=" " id="" />
            <label htmlFor="Remember me">Remember Me</label>
          </div>
          <span className=" text-blue-500">Forgot password?</span>
        </div>
        <button
        className=" w-full mb-4 text-[18px] mt-6 rounded-full
         bg-white text-purple-950 hover:bg-slate-300 hover:text-fuchsia-950 py-2 transition-colors duration-500"
        type="Submit">Login</button>
        <div>
          
          <span className=" m-4"> 
            Are you new here?
            <Link to='/signup'
            className=" text-blue-800 tex-medium font-bold"
            href="">
          Create Account!!
           </Link>
          </span>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
