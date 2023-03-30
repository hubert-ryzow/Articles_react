import { useState } from 'react'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <div className="Navbar bg-slate-500 w-full h-[70px] flex justify-around">
      <button className='bg-slate-200 rounded-lg 2xl:text-[26px] sm:text-[24px] font-bold p-2 mr-10 transition-all'>Artykuł 1</button>
      <button className='bg-slate-200 rounded-lg 2xl:text-[26px] sm:text-[24px] font-bold p-2 mr-10 transition-all'>Artykuł 2</button>
      <button className='bg-slate-200 rounded-lg 2xl:text-[26px] sm:text-[24px] font-bold p-2 mr-10 transition-all'>Artykuł 3</button>
      <button className='bg-slate-200 rounded-lg 2xl:text-[26px] sm:text-[24px] font-bold p-2 transition-all'>Artykuł 4</button>
    </div>
  )
}

export default Navbar
