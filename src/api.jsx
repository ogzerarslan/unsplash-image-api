import axios from 'axios'
const  searchImages = async(term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
     headers:{
       Authorization: 'Client-ID g1WFS5vEI9wKOwWdRHmITfnRStme-Fie6CHOu2HUTA4'
     },
     params:{
       query:term
     }
    })
    
    return response.data.results
 
   }
   export default searchImages