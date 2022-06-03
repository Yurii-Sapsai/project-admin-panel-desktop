import React from 'react'
import './SinglePage.sass'

import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Chart from '../../components/Chart/Chart'
import List from '../../components/Table/Table'


function SinglePage() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title'>Information</h1>
            <div className="item">
            <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className='itemKey'>Email: </span>
                    <span className='itemValue'>janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Phone: </span>
                    <span className='itemValue'>+3 8 010 1010105</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>Address: </span>
                    <span className='itemValue'>Elton St. 234 Garden Yd. New York</span>
                  </div>
                  <div className="detailItem">
                    <span className='itemKey'>County: </span>
                    <span className='itemValue'>USA</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="right">
              <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
            <h1 className='title'>Last Transactions</h1>
              <List/>
        </div>
      </div>

    </div>
  )
}

export default SinglePage