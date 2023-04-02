import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'counter',
  initialState:{
    url :{},
    genres : {},
  },
  reducers: {
   getconfigration : (state, action)=>{
state.url = action.payload
   },
   getGenres : (state, action)=>{
state.genres = action.payload
   }
    
  },
})

export const { getconfigration, getGenres } = homeSlice.actions

export default homeSlice.reducer