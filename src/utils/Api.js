import axios from "axios";

// const API_KEY = "1eb0e956201c1188e31827c7ab2857b2";
const BASE_URL = "https://api.themoviedb.org/3"
// const headers = {
//      TOKEN,
// }
const React_API = "1eb0e956201c1188e31827c7ab2857b2"

export const  getdata = async(url , param )=>{

    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers: {
                Authorization: "Bearer  "  
              },
            param,
        
        })
        return data

    }catch(err){
        console.log(err)
        return err
    }

}