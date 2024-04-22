"use client"

import { matchesType } from '@/types'
import { useState } from 'react'

const Status = ({matchesList,matchesListFinished}:{matchesList:matchesType[],matchesListFinished:matchesType[]}) => {

const [statusMatch, setStatusMatch] = useState("TODAY");

  return (
    <div>
      <div className='flex space-x-4 mb-2 md:mb-4'>
        <button onClick={() => setStatusMatch("TODAY")} 
                className={`px-2 py-1 text-white text-xs md:text-sm rounded-md ${statusMatch === 'TODAY' ? 'bg-teal-400 font-semibold' : 'bg-slate-500 font-regular'}`}>TODAY</button>
        <button onClick={() => setStatusMatch("FINISHED")}
                className={`px-2 py-1 text-white text-sm rounded-md ${statusMatch === 'FINISHED' ? 'bg-teal-400 font-semibold' : 'bg-slate-500 font-regular'}`}>FINISHED</button>
      </div>
    </div>
  )
}

export default Status
