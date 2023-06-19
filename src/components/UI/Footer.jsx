import { Fragment } from "react";
import facebook from "./img/facebook.png"
import linkedin   from "./img/linkedin.png"
import git  from "./img/git.png"
import insta  from "./img/insta.png"

const Footer=()=> {

    return (
        <Fragment>
        <footer class="flex flex-row  bg-blue-800 justify-center items-center   w-full  relative bottom-0 h-auto  border-[2px] border-l-0 border-r-0 border-b-0 border-red-900 " >
        <ul class="flex flex-row justify-center items-center" >
            <li><a href=""><img  class="w-8 m-10 h-8" src={facebook} alt=""/></a></li>
            <li><a href=""><img  class="w-8 m-10 h-8" src={linkedin} alt=""/></a></li>
            <li><a href=""><img  class="w-8 m-10 h-8" src={git} alt=""/></a></li>
            <li><a href=""><img  class="w-8 m-10 h-8" src={insta} alt=""/></a></li>
        </ul>
        </footer>
    </Fragment>

    )

}; 

export default Footer