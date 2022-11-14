import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
const { products } = require('../utils/data');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([])

useEffect(() => {
    customFetch(3000, products)
    .then(result => setDatos(result))
    .catch(err => console.log(err))
}, [datos]);

return ( 
    <>
    <ItemList items={datos}/>
    </>
)
}


export default ItemListContainer