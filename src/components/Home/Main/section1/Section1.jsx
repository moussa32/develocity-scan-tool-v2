import { LeftBar } from "../../leftheader/LeftBar"
import MySearch from '../../Search/MySearch'
export function Section1(){
    return(
        <>
            <div className="d-flex container justify-content-between flex-wrap">
                <div className="col-xs-12 col-md-6 "><LeftBar/></div>
                <div className=" mt-5  col-md-6 col-xl-auto"> <MySearch/></div>
            </div>
        </>
    )
}