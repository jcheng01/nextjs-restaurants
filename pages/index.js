import Container from "../components/Container";
import { Grid } from "../components/Grid";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import { getAllRestaurants, getAllRestaurantTypes } from "../lib/api"
import { useState } from "react";
import Heading from "../components/Heading";
import Filters from "../components/Filters";

export async function getStaticProps() {
  const restaurants = await getAllRestaurants();
  const restaurantTypes = await getAllRestaurantTypes();

  return {
    props: {
      restaurants,
      restaurantTypes
    }, // will be passed to the page component as props
  }
}

const homePage = ({ restaurants, restaurantTypes }) => {
  const [activeCategory, setActiveCategory] = useState("All")
  const filteredRestaurants = restaurants.filter((restaurant) =>{
    if (activeCategory === "All"){
      return restaurant
    }
    if (restaurant.node.restaurantTypes.edges.length > 0){
      return restaurant.node.restaurantTypes.edges[0].node.name === activeCategory ?
      restaurant
    : false;
    }
  })
  return (
    <Layout>
      <Showcase 
      title="A guide to the best eating spots in syracuse."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      cta="View Restaurants"
      />
      <section>
        {/* <Heading level="2">{activeCategory}</Heading>
        <Buttons label="All" clickHandler={() =>{setActiveCategory("All")}}/>
        <Buttons label="American" clickHandler={() =>{setActiveCategory("American")}}/>
        <Buttons label="Mexican" clickHandler={() =>{setActiveCategory("Mexican")}}/> */}
        <Container>
          <Filters activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={restaurantTypes}/>
          <Grid data={filteredRestaurants}/>
        </Container>
      </section>
    </Layout>
  )
}
export default homePage