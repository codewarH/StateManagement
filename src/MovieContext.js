import React, { useState, createContext } from 'react'

//initiate context
export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Me Before You',
      price: 'R120',
      id: 23123,
    },
    {
      name: 'SpiderMan 3',
      price: 'R150',
      id: 23456,
    },
    {
      name: 'Fatal Affair',
      price: 'R100',
      id: 12532,
    },
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}
