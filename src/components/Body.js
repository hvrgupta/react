import RestaurantCardComponent from "./RestaurantCard";
import resList from "../utils/mockData";

const BodyComponent = () => (
    <div className='body'>
        <div className='search'>Search</div>
        <div className='res-container'>
            {/* <RestaurantCardComponent resName="GK" cuisines="North,Punjabi,veg" rating="4 stars" eta="25 minutes" /> */}
            {
                resList.map(res =><RestaurantCardComponent key={res.data.id} resData={res} />)
            }
        </div>
    </div>
);

// default export -> used to export single thing
export default BodyComponent;