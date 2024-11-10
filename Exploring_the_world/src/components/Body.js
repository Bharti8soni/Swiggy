import RestaurantCard from './RestaurantCard';
import resList from "./utils/mockData";
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'
const Body = () =>{
  //Local state variable - super powerful variable
  const [listOfRestaurants ,setListOfRestaurants] =  useState(resList);
  const [filteredRestaurants ,setFilteredRestaurants] =  useState(resList);

  const[searchText, setSearchText] = useState("")
 
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.87560&lng=80.91150"
    
    );
    const json = await data.json();
    console.log(json);
   setListOfRestaurants(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  };
  
  //Way to add loading page before rendering below stuff(return)
  //Conditional rendering
  if(listOfRestaurants.length === 0){
    return <Shimmer/>
  }

    return(
        <div className="body">
            <div className="filter">
              <div className='search'>
                <input type='text' className='search-box' value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }
                }/>
                <button onClick={()=>{
                  //Filter the restaurant and update the UI
                  const filteredRestaurant = listOfRestaurants.filter(
                     (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                   setFilteredRestaurants(filteredRestaurant);
                }}>Search</button>
              </div>
              <button className="filter-btn"
              onClick={()=>{
                //filter logic here
                const filteredList = listOfRestaurants.filter(
                  (res)=> res.info.avgRating > 4
                );
                
                setListOfRestaurants(filteredList);
              }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
             {
              filteredRestaurants.map((restaurant) =>{
                return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
              })
             }
             		
            </div>

        </div>
    );
};
export default Body