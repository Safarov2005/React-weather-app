import React from "react";
const api = {
  key: "613be554604128da895b7c594c636941",
  baseUrl: "https://api.openweathermap.org/data.2.5/",
}



function App() {
  const dateBuilder = (s) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]
    let days = ['Sunday', 'Monday', 'Tesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`


  }
  
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/>
        </div>
        
        <div className="location-box">
          <div className="location">
          Egypt, US
          </div>
        <div className="date">{dateBuilder(new Date())}</div>
          <div className="wather-box">
            <div className="tem">8°C</div>
            <div className="weather">Sunny</div>
          </div>
          </div>

      </main>
    </div>
  );
}

export default App;
