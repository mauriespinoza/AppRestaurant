//import React from 'react'
import {BlogComponent} from '../../components/blog/BlogComponent';
import { Header } from '../../components/header/Header';
export const Blog = () => {
  return (
    <>
      <div id="container">
        {/* <h1 className="text-center">
            Blog Artículos de Comida
        </h1> */}
        <Header title='Blog Artículos de Comida'/>
        <BlogComponent/>
      </div> 
    </>
  )
}
