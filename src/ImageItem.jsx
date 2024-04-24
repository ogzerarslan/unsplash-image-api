import React from 'react'

function ImageItem({image}) {
    console.log(image)
  return (
    <div>
      <img className='img-list-img' src={image.urls.small} alt={image.alt_description} />
    </div>
  )
}

export default ImageItem
