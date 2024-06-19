import React from 'react';
import Flashlist from './Components/Flashlist';
import QueryLogList  from './Components/QueryLogList';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <section>
          <h2>Flashes</h2>
          <Flashlist/>
          </section>
          <section>
          <h2>Query Logs</h2>
          <QueryLogList/>
        </section>
      </main>
    </div>
  )
}

export default App;