import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1200px-UFC_Logo.svg.png" alt="UFC" />
        <p>
          STEP INTO THE OCTAGON : GRAB YOUR UFC TICKETS NOW AND WITNESS THE EVERY BONE-CRUSHING MOMENT LIVE !
        </p>
        <a
          className="App-link"
          href="https://www.ufc.com/tickets"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET TICKETS
        </a>
      </header>
	  <main>
	   <h2> POSTER FOR THE NEXT FIGHT NIGHT :</h2>
	  <img src="https://cdn.vox-cdn.com/thumbor/h1Y2lyOG7amk_JkgZbKKwPz_q1Q=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/72674090/F9ep0PTW0AAs480.5.jpeg" alt="nextfight"
		style={{ width: '300%', maxWidth: '800px', height: 'auto', margin: '90px' }}
	  />
	  </main>
    </div>
  );
}

export default App;
