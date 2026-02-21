import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between'>
           <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
           <div>
            <p className=' leading-normal text-white mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus maxime sapiente, dolore qui aut fugit odio nisi!</p>
             <div className='flex justify-between'>
                <button className='bg-blue-500 text-white font-medium px-4 py-1 rounded-full'>{props.tag}</button>
                <button className='bg-blue-500 text-white font-medium px-2 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
             </div>
           </div>
        </div>

  )
}

export default RightCardContent