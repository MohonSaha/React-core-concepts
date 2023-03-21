import logo from './logo.svg';
import './App.css';

const salary = 5000;
const singer = {name: 'Hero alom', job: 'singer'};
const nayok = {name: 'Sakib Khan', job: 'actor'};
const singerStyle = {
  color: 'red'
}
const nayokStyle ={
  backgroundColor:'purple'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>

      <div className="container">
        <h2>Wellcome to react world</h2>
      </div>

      <div className='industry'>
          <p style={singerStyle}>Singer: {singer.name}, Job: {singer.job}, Salary:{salary + 2000}</p>
          <p style={nayokStyle}>Nayok: {nayok.name}, Job: {nayok.job}, Salary:{salary + 4000}</p>
      </div>



        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
