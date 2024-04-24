import { useState } from 'react'

import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './api'
import ImageList from './ImageList'
function App() {
  const [images, setImages] = useState([])


  const  handleSubmit = async (term) =>{
  console.log(term)
   const result = await searchImages(term)
   setImages(result)

  }



  return (
    <>
    <div className='container'>
    <SearchHeader search={handleSubmit}  />
    <ImageList imagesPlaceholder={images}/>
    </div>
    </>
  )
}

export default App
