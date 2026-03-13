import React from 'react'

const data = [
    {
        "src":"/icon-1.png",
        "h1":"50K",
        "symbol":"+",
        "h2":"Trees Planted",
        "p":"Across all AMC zones"
    },
    {
        "src":"/icon-2.png",
        "h1":"12",
        "h2":"Lakes Restored",
        "symbol":"+",
        "p":"Including Keetham Lake & Brahma Sarovar"
    },
    {
        "src":"/icon-3.png",
        "h1":"30",
        "symbol":"%",
        "h2":"Waste Recycled",
        "p":"Leading smart city index in 2023"
    },
    {
        "src":"/icon-4.png",
        "h1":"200",
        "symbol":"+",
        "h2":"Green Zones",
        "p":"Parks, pocket forests, & habitats"
    }
]

const Impact = () => {
  return (
    <div className='h-[90vh] w-full bg-green-900 flex flex-col justify-center gap-10'>
        <div className='flex flex-col items-center justify-center'>
            <div>— Our Impact</div>
            <h1 className='text-7xl font-[Outfit-variable]'>Numbers That Tell The Story</h1>
        </div>

        <div className="card-container h-content w-full flex gap-6 justify-center">
            {data.map((item)=>{
            return (
                <div className="cards relative w-[20vw] h-[20vw] rounded-2xl border-blue-500 border-solid border-2 text-center p-10 flex items-center flex-col">
                        <img className="h-10 m-4" src={item.src} alt="" />
                        <div className='flex items-end font-[Outfit-variable]'>
                            <h1 className='text-5xl'>{item.h1}</h1>
                            <span className=''>{item.symbol}</span>
                        </div>
                        <h2>{item.h2}</h2>
                        <p className='text-xs'>{item.p}</p>
                </div>
            )})}
        </div>
    </div>
  )
}

export default Impact