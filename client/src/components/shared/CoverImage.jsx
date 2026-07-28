import React, { useState } from 'react'

const CoverImage = ({src, icon:Icon, className=''}) => {
    const [failed,setFailed]=useState(false)
    if(!src || failed){
        return(
            <div className={`bg-gradient-to-br from-[#eee9ff] to-[#ddd8fe] flex items-center justify-center ${className}`}><Icon size={32} className="text-[#7c6ff7]"strokeWidth={1.5} /></div>
        )
    }
  return (
    <img src={src} alt="" onError={()=>setFailed(true)} className={`object-cover ${className}`}/>
  )
}

export default CoverImage