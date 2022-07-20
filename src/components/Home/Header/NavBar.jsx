import { NavDisplay } from "../../common/Navbars/headerNavbar/NavDisplay";
import SocialBar from "../../common/Navbars/SocialBar/SocialBar";
const NavBar =() =>{
    return(
        <>
        <div>
            <SocialBar/>
            <NavDisplay/>
        </div>
        </>
    )
}

export {NavBar};