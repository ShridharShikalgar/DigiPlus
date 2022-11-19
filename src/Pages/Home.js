import React from 'react'

const Home = () => {
  return (
    <div className='main-container'>
      <div className='Title'>WELCOME TO TEAM  <span style={{color:'#6247aa'}}> Z+</span></div>
      <div className='Announcements'>
        <span style={{marginRight:'10px', fontSize:'20px'}}>Announcements</span>
        <img className='AnnouncementsIMG' src='https://cdn-icons-png.flaticon.com/128/791/791950.png' alt='Announcements'/>
      </div>
      <div className='HeadingInSpan'>
        We are working on adding Project and Internship Details, So just fill up profile only
      </div>
      <div className='WorkAction'>
        <h4 style={{fontWeight:'bold'}}>Work Action</h4>
        <div className='ViewIntern'> View Intern Data </div>
      </div>
    </div>
  )
}

export default Home
