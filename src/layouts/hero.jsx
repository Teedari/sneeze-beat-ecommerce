import React from 'react'
import heroSvg from '../assets/svgs/marshmelo.svg'
import SearchBar from '../components/SearchBar'
const Hero = () => {
  return (
    <section className='container hero'>
      <div className='hero-content flex flex-col gap-5 items-start'>
        <ul className='flex gap-2 items-center'>
          <li className='font-semibold'>Trending:</li>
          <li className='bg-slate-900 text-primary  py-1 px-2 rounded-lg'><a href="sd">Drill</a></li>
          <li className='bg-slate-900 text-primary  py-1 px-2 rounded-lg'><a href="sd">Hip pop</a></li>
          <li className='bg-slate-900 text-primary  py-1 px-2 rounded-lg'><a href="sd">Reggae</a></li>
          <li className='bg-slate-900 text-primary  py-1 px-2 rounded-lg'><a href="sd">Trap</a></li>
        </ul>
        <SearchBar />
        <h1 className='uppercase  text-slate-300 font-bold'>The perfect place for music heaven.</h1>
        <p className='text-muted'>Aliquip proident est quis qui Lorem ex. Dolor sunt sunt dolore eu esse adipisicing eiusmod fugiat ullamco occaecat qui exercitation do aliqua. Enim aliquip duis aliquip ipsum laborum.</p>  
      </div>
      <div className='hero-image'>
        <div>
          <img src={heroSvg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero