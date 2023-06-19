const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

import Card from "../UI/Card";
import MealsItem from "./MealsItem";
const AvailableMeals = ()=>{
    const mealslist = DUMMY_MEALS.map(meals=><MealsItem name={meals.name} id={meals.id} description={meals.description} key = {meals.id} price={meals.price}   /> );
    return <section className='  max-w-7xl w-2/3 mt-24 mb-8 m-auto'>
        <Card>
        <ul className="m-0 p-0  " >
            {mealslist}
        </ul>
        </Card>
    </section>
};




export default AvailableMeals;