import { useState } from "react"
import { Link } from "react-router-dom"
import {AiOutlineClose} from 'react-icons/ai'
import {RiMenuUnfoldFill} from 'react-icons/ri'

 
 const Nav = () => {
    const [menu,setMenu] = useState(false);
    const handleChange = () => {
        
        setMenu(!menu);
        
    };
   return (
    <header className=" w-full z-10 relative py-4 px-3 
      from-transparent bg-gradient-to-r bg-slate-50">
        {/* Desktop nav section  */}
        <nav className=" container flex justify-between">
{/* THe logo section */}
<div className=" flex items-center gap-2 text-lg font-mono">
<Link to="/" className=" font-serif text-3xl text-gray-400">NABU</Link>
</div>
{/* Nav in large devices */}
<div className=" hidden md:flex gap-20  items-center font-sans text-xl">

<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Lessons
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Tutors
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
ExamTables
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Syllabi
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Faqs
</Link>
</div>
{/* Hamburger Menu Section */}

<div className=" md:hidden flex items-center ">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange}  />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange}  />
          )}
        </div>

{/* The mobile section */}
<div className={`${menu ? " -translate-x-5" : " -translate-x-full"}
  md:hidden flex flex-col absolute rounded-md border border-black 
        bg-slate-100 text-black from-transparent to-slate-400 
        left-0 top-16 font-mono text-xl text-center pt-8 pb-4 gap-8
        w-3/4 h-fit transition-transform ease-in-out duration-500`}>
             
      
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Lessons
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Tutors
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
ExamTables
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Syllabi
</Link>
<Link to='/'  className=" transition-shadow shadow-black duration-200 ease-linear">
Faqs
</Link>
</div>
        </nav>
    </header>
   )
 }
 
 export default Nav