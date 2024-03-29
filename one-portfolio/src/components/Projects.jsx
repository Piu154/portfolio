import React from 'react';
import amazon from "../assets/portfolio/amazon.jpg";
import codeEditor from "../assets/portfolio/codeEditor.jpg";
import food from "../assets/portfolio/food.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import rockpaper from "../assets/portfolio/rockpaper.jpg";
import snake from "../assets/portfolio/snake.jpg";
const Projects = () => {

  const projects=[
    {
        id:1,
        src:amazon
    },
    {
        id:2,
        src:codeEditor
    },
    {
        id:3,
        src:food
    },
    {
        id:4,
        src:portfolio
    },
    {
        id:5,
        src:rockpaper
    },
    {
        id:6,
        src:snake
    },
  ]

  return (
    <div name="projects" className='bg-gradient-to-b from-black
    to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex
      flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4
            border-gray-500'>
               Projects
            </p>
            <p className='py-6'>
                Check Out Some Of My Work Right Here
            </p>
        </div>

      


        <div className='grid sm:grid-cols-2 md:grid-cols-3
        gap-8 px-12 sm:px-0'>
             {
        projects.map(({id,src})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg
            '>
                <img src={src} alt="" className='rounded-md duration-200
                hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200
                    hover:scale-105'>Code</button>
                </div>
            </div>
        ))
       }
      
        </div>
      </div>
    </div>
  );
};

export default Projects
