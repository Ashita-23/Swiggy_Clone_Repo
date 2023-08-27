
import "./MenuHeader.css"
import {Swiggy_IMAGE_CDN_URL} from "../../Util/ApiConfig"
const MenuHeader  = ({menuHeader}) => {
    // console.log(menuHeader,"MheadInfo")
    return(<div>
      <div>
    <h1>{menuHeader.name}</h1>
       <p>{menuHeader.cuisines
}</p>
       <p>{menuHeader.areaName}</p>
       <img className="MenuHeadImg" src={Swiggy_IMAGE_CDN_URL+menuHeader.cloudinaryImageId
} />
    </div>
    <div>
        <span>{menuHeader.avgRatingString}</span><br/>
        <span>{menuHeader.totalRatingsString
}</span>
<p>{menuHeader?.feeDetails?.message}</p>
    </div>
 
    </div>)
}

export default MenuHeader