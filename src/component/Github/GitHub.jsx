import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./GitHub.css";



const GitHub = () => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div>
      <h2 className="git" data-aos="fade-right">My GitHub Calender</h2>
      <br/>
      <div className='github_Calender' data-aos="fade-right">
        <GitHubCalendar style={{margin:"auto"}}
          username='kundan799'
          transformData={selectLastHalfYear}
          hideColorLegend
        />
      </div>
    </div>


  )
}



export default GitHub