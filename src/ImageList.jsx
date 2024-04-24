import React from 'react'
import ImageItem from './ImageItem'

function ImageList({imagesPlaceholder}) {
  return (
    <div className='imageList'>
      {imagesPlaceholder.map((img, index)=>{
       return <ImageItem key={index} image={img}/>
      })}
    </div>
  )
}

export default ImageList
