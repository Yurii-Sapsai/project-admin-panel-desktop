import React from 'react'
import './HomePage.sass'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

function HomePage() {
  return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
              <Navbar/>
                homeContainer
            </div>
        </div>
  )
}

export default HomePage