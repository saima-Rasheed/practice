import React from 'react';

import Image from 'next/image';
import img1 from '../../../public/table1.jpg';
import img2 from '../../../public/table2.jpg';
import img3 from '../../../public/table3.jpg';






const Assign2 = () => {
  return (
     <div className='grid place-content-center gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>  
    <div className='bg-white h-62 w-52'> 
        <Image 
        src="/table1.jpg"
        width={200}
        height={200}
        alt='cloud engineering'
         
        
        
        />
       <p className='text-blue-600 text-center font-bold ' > cloud engineering</p>
       <p className='text-blue-600 text-center font-bold'>Admission open</p> 
    </div>
    <div  className='bg-white h-62 w-52'>
 
 <Image 
        src="/table2.jpg"
        width={200}
        height={200}
        alt='Solopreneur'
         
        
        />
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' > Solopreneur</p>
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>Get started</p>



        </div>
        <div  className='bg-white h-62 w-52'>
        <Image  
        src="/table3.jpg"
        width={200}
        height={200}
        alt='Governor Sir'
         
        
        />
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' > Governor Sir</p>
       <p className='text-blue-600 font-bold text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>Admission Open</p>
            </div>         
    </div>    
      
    
  )
}

export default Assign2
