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

      <div className="container">
        <h2>Wellcome to react world</h2>
      </div>

      <div className='industry'>
          <p style={singerStyle}>Singer: {singer.name}, Job: {singer.job}, Salary:{salary + 2000}</p>
          <p style={{backgroundColor:'yellow', color: 'blue'}}>Nayok: {nayok.name}, Job: {nayok.job}, Salary:{salary + 4000}</p>
      </div>

    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <h1>Start New Component</h1>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>
    <Friend></Friend>

    </div>
  );
}

// Return HTML from a component:
function Person(){
  return(
    <div className='mohon'>
      <h2>Mohon Saha</h2>
      <p>Web Developer</p>
    </div>
  );
}


function Friend(){
  return(
    <div className='friend'>
      <h2>Subrata Sarket</h2>
      <p>CSE Student</p>
    </div>
  );
}

export default App;
