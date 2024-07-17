import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci"
import Page from "../assets/page.jpg"

const Home = () => {

  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])

    useEffect(() => {
      try {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').then((res) =>{ return res.json()}).then((data) => {
          setProducts(data.drinks || [])
          //console.log(products)
        })
        // if(!res.ok) throw new Error('Couldn\'t find products')
      } catch (error) {
        console.log(error.message)
      }
    }, [])

    // const results = json.filter((cocktail) => {
    // return cocktail.strDrink.toLowerCase().includes(query.toLowerCase())
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    //   })

  const handleSearch = (query) => {

    if (query) {
      try {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((res) => { return res.json()}).then((data) => {
          setProducts(data.drinks || [])
        })
      } catch (error) {
        console.log(error.message)
      }
    } else {
      return
    }
  }

  return (
    <section className="py-8 flex flex-col justify-center items-center px-0 max-w-full lg:max-w-[80%] mx-auto">
    <h1 className="font-bold text-xl pb-8">Full Landing Page</h1>

    <div className="flex p-3">
    <input
      className="w-full p-2 font-medium bg-slate-50 focus:outline-gray-300 focus:bg-white"
      type="text"
      placeholder="Search for a cocktail"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    <button
      onClick={() => handleSearch(query)}
      className="text-lg"
    ><CiSearch /></button>
    </div>

    <div>
      { products 
        ?
        <div className="flex flex-wrap gap-3 justify-center">
          { products?.slice(0, 6).map((product) => (
            <div key={product.idDrink} className="flex gap-3 max-w-40 max-h-80 p-3 cursor-pointer overflow-hidden bg-slate-50 rounded-sm">
              <div className="flex items-start justify-start flex-col">
                <img src={product.strDrinkThumb} className="w-full rounded-sm" alt={product.strDrink} />
                <div className="pt-2">
                  <h2 className="text-[10px] font-bold">{product.strDrink}</h2>
                  <p>{product.strInstructions}</p>
              </div>
            </div>
            </div>
          ))}
          </div>
        : <p>Loading...</p>
      }
    </div>
      <img src={Page} alt="page" />
    </section>
  )
}

export default Home