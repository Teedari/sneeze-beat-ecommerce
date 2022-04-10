import { Layout } from 'antd'
import React from 'react'

const Footer = () => {
  return (
    <Layout.Footer className='layout-footer' style={{padding: '0', background: 'rgba(0,0,0,.3)'}}>
      <footer className="container-block">
        <div className="container flex items-center justify-between">
          <div className='logo'><h5 className='text-white m-0'>Sneeze.</h5></div>
          <div className="flex gap-4">
           <a href="234" className="w-[50px] h-[50px] flex items-center text-slate-600 justify-center text-xl rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-black"> <i className='bx bxl-facebook'></i></a>
           <a href="234" className="w-[50px] h-[50px] flex items-center text-slate-600 justify-center text-xl rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-black"> <i className='bx bxl-twitter'></i></a>
           <a href="234" className="w-[50px] h-[50px] flex items-center text-slate-600 justify-center text-xl rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-black"> <i className='bx bxl-instagram'></i></a>
           <a href="234" className="w-[50px] h-[50px] flex items-center text-slate-600 justify-center text-xl rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-black"> <i className='bx bxl-linkedin' ></i></a>
          </div>
        </div>
      </footer>
    </Layout.Footer>
  )
}

export default Footer