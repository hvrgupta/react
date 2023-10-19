import RestaurantCardComponent from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


// State variable in React
// Hooks in React -> utility function in React
// Normal JS functions
// useState() -> Maintains state of the component
// useEffect()

const BodyComponent = () =>  {

    const [listOfRestaurants,setListOfRestaurants] = useState(resList);

    // let listOfRestaurants = resList;
    
    return ( 
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList =  listOfRestaurants.filter((res) => {
                        return res.data.avgRating > 4;
                    })
                    setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {/* <RestaurantCardComponent resName="GK" cuisines="North,Punjabi,veg" rating="4 stars" eta="25 minutes" /> */}
                {
                    listOfRestaurants.map(res =><RestaurantCardComponent key={res.data.id} resData={res} />)
                }
            </div>
        </div>
    );
}  

// default export -> used to export single thing
export default BodyComponent;