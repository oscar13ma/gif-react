
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css'
import CardGif from './components/cardGif/cardGif';





function App() {
  const [allGifs, setallGifs] = useState([])
  const apiKey = 'zt2kwLOTOPlN0X18DQwRVrkXwOoOdXst' 

  let baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`; //el 20%para n dejar espacio

  const handleOnSubmit = (event) => {
 event.preventDefault()
  console.log('submit')
const search = event.target[0].value;
console.log(search)

const params = {q: search}
const urlParams = new URLSearchParams(params).toString();
console.log(urlParams)


  fetch(`${baseUrl}&${urlParams}`)
    .then(res => res.json())
    .then(response => {
      
      console.log(response)
      const gifs = response.data.map((gifData) => {
      // console.log(gifData.images.downsized_medium.url)
      return {
      id: gifData.id,
      title: gifData.title,
      url: gifData.images.downsized_medium.url,

      }
      });
      // console.log(gifs)
      setallGifs(gifs)
      // response.data.forEach((gifData) => {
      //   console.log(gifData.images.downsized_medium.url)

      // });
    }  )
}
  
    // useEffect(() => {                        //para que se ejecute solo una vez
    // fetch(url)
    // .then(res => res.json())
    // .then(response => {
      
    //   console.log(response)
    //   const gifs = response.data.map((gifData) => {
    //   // console.log(gifData.images.downsized_medium.url)
    //   return {
    //   id: gifData.id,
    //   title: gifData.title,
    //   url: gifData.images.downsized_medium.url,

    //   }
    //   });
    //   // console.log(gifs)
    //   setallGifs(gifs)
    //   // response.data.forEach((gifData) => {
    //   //   console.log(gifData.images.downsized_medium.url)

    //   // });
    // }  )

    // console.log('useEffect')       
    // }, [])

  return (
    <div>
     <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Busque un gif</Form.Label>
        <Form.Control type="text" placeholder="dragon ball" /> 
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    {allGifs.map((gif) =>{
      return (
        <CardGif gif={gif} />

      );
    })}

    </div>
  );
}

export default App
