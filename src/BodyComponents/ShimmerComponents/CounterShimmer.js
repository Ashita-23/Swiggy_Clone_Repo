import "./CounterShimmer.css"
import CardsShimmer from "./CardsShimmer"
const CounterShimmer = () =>{
    return(<>
        <div className="outer-Shimmer">
            <div className="Shimmer-nav"></div>
            <div className="inner-Shimmer">
                   { Array(16).fill(" ").map((e,index)=>{return (<><CardsShimmer key={index}/></>)})}
            </div>
        </div>
    </>)
}

export default CounterShimmer