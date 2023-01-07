import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./GitHub.css";



const GitHub = () => {
 

  return (
    <div>
      <h2 className="git" data-aos="fade-right">My GitHub Calender</h2>
      <div className='github_Calender' data-aos="fade-right">
        {/* <GitHubCalendar style={{margin:"auto"}}
          username='kundan799'
          
        /> */}
          <GitHubCalendar
          username="kundan799"
          blockSize={15}
          blockMargin={5}
         color={ "green"}
          fontSize={12}
        />

      </div>
    </div>


  )
}



export default GitHub