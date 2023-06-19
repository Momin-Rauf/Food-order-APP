// import { Fragment } from "react";
// import meals from "../../assets/meals.jpg"
// import HeaderCartButton from "./HeaderCartButton";
// import {GiFoodTruck} from 'react-icons/gi';

// const Header = (props) =>{
//     return (
//         <Fragment>
//             <header className="text-white z-10  bg-blue-900 py-3  font-bold h-20 w-full fixed flex shadow-lg flex-row justify-center items-center px-5 "  >
//             <h1 className="text-2xl ml-20 relative right-8 w-56 " >
//                 The 7Store
//             </h1>
//             <div className="w-3/4" >
//             <div className=" hover:translate-x-96 duration-1000" ><GiFoodTruck size={70} /></div>
//             </div>
//             <button>
//                 <HeaderCartButton/> 
//             </button>
//             </header>
//             <div className="overflow-hidden h-96" >
//                 <img   className="w-full" src={meals} alt="list of delicous food on the table"     />
//             </div>
//         </Fragment>
//     )
// };
// export default Header;



import { Fragment, useEffect } from "react";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { GiFoodTruck } from 'react-icons/gi';

const Header = (props) => {
  useEffect(() => {
    const handleScroll = () => {
      const translateDiv = document.getElementById('translateDiv');
      const scrollX = window.scrollY;
      translateDiv.style.transform = `translateX(${scrollX}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <header className="text-white z-10 bg-blue-900 py-3 font-bold h-20 w-full fixed flex shadow-lg flex-row justify-center items-center px-5">
        <h1 className="text-2xl ml-20 relative right-8 w-56">
          The 7Store
        </h1>
        <div className="w-3/4">
          <div id="translateDiv" className="hover:translate-x-96 duration-1000">
            <GiFoodTruck size={70} />
          </div>
        </div>
        
          <HeaderCartButton Cart = {props.Cart}/>
        
      </header>
      <div className="overflow-hidden h-96">
        <img className="w-full" src={meals} alt="list of delicious food on the table" />
      </div>
    </Fragment>
  );
};

export default Header;
