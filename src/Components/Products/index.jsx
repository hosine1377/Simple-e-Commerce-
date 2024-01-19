import React, { useState } from 'react'
import { getAllProducts } from '../../API'

function Products() {
  const [items, setItems] = useState([])
  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products)
    })
  }, [])
  return <div>items</div>
}

export default Products
