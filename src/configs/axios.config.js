import axios from "axios";



export const instance = axios.create({
  method: 'GET',
  headers: {
    'x-rapidapi-host': `${process.env.REACT_APP_RAPID_API_HOST}`,
    'x-rapidapi-key': `${process.env.REACT_APP_RAPID_API_KEY}`
  }
})