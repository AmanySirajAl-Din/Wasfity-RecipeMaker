import Recipe from '../recipe/recipe'
import './recipesList.css'
import recipe1 from '../../../assets/img/recipe1.jfif'
import recipe2 from '../../../assets/img/recipe2.jfif'
import recipe3 from '../../../assets/img/recipe3.jfif'
import recipe4 from '../../../assets/img/recipe4.jfif'
import recipe5 from '../../../assets/img/recipe5.jfif'
import recipe6 from '../../../assets/img/recipe6.jfif'
import recipe7 from '../../../assets/img/recipe7.jfif'
import recipe8 from '../../../assets/img/recipe8.jfif'
import recipe9 from '../../../assets/img/recipe9.jfif'

const RecipeList = () => {
  const data = [
    {
      image: recipe1,
      title: "Shepherd's Pie VI",
      description:
        "This Shepherd's Pie is a layered casserole of beef, carrots, and potato.",
    },
    {
      image: recipe2,
      title: 'Buttery Garlic Green Beans',
      description:
        'Only fresh green beans and garlic will do for this easy, healthy, and flavorful',
    },
    {
      image: recipe3,
      title: 'Oven Roasted Potatoes',
      description:
        'A great roasted potato side dish made with olive oil and herbs.',
    },
    {
      image: recipe4,
      title: 'Dry Brine Turkey',
      description:
        'Dry brining is the easiest way to get a moist and flavorful turkey on the table',
    },
    {
      image: recipe5,
      title: 'Giblet Gravy I',
      description:
        'My Mother has been making this gravy every year at Thanksgiving and',
    },
    {
      image: recipe6,
      title: "Chef John's Perfect Prime Rib",
      description:
        'My family begs me to make this creamy baked dish every Thanksgiving and',
    },
    {
      image: recipe7,
      title: 'Yummy Sweet Potato Casserole',
      description:
        'This is a specific formula for achieving a perfectly pink prime rib cooked',
    },
    {
      image: recipe8,
      title: 'Pumpkin Soup',
      description:
        "This delicious, cream-like soup is served at our family's Thanksgiving dinner",
    },
    {
      image: recipe9,
      title: 'Pineapple Glazed Ham',
      description:
        'This easy but delicious ham glaze has been a family holiday favorite for years!',
    },
  ]

  return (
    <section className='recipe-list'>
      {data.map((recipe, index) => {
        return <Recipe {...recipe} key={index} />
      })}
    </section>
  )
}

export default RecipeList
