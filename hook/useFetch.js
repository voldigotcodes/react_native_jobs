import {useEffect, useState} from 'react'
import axios from 'axios'
// import {RAPID_API_KEY} from '@env'

// const rapidapikey =RAPID_API_KEY

const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'x-rapidapi-key':
          'fe19c91c1fmsh05bed6ac7ed400dp15b311jsn8e83885e36f9',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {...query}
      };

      const fetchData = async ()=>{
        setIsLoading(true)
        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert("There is an error")
        } finally{
            setIsLoading(false)
        }
      }

      useEffect(()=>{
        fetchData()
      }, [])

      const refetch = () => {
        setIsLoading(true)
        fetchData()
      }

      return {data, isLoading, error, refetch}
}

export default useFetch
