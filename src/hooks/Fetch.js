import  { useEffect, useState } from 'react'
import {getdata} from "../utils/Api"
const useFetch = (url) => {
  const [loading, setLoading] = useState(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const React_API = "1eb0e956201c1188e31827c7ab2857b2"

  useEffect(()=>{
      setLoading("...loading");
      setData(null);
      setError(null);
   ;
      getdata(url)
      .then((res)=>{
        setData(res);
        setLoading(null)
      }).catch((error)=>{
         setLoading(null);
         setData(null);
         setError("error occure")
      })
  },[url])
  return {data, loading, error}
}

export default useFetch