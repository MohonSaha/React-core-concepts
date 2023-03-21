import logo from './logo.svg';
import './App.css';

const salary = 5000;
const singer = { name: 'Hero alom', job: 'singer' };
const nayok = { name: 'Sakib Khan', job: 'actor' };
const singerStyle = {
  color: 'red'
}
const nayokStyle = {
  backgroundColor: 'purple'
}

function App() {

  const nayekas = ['samantha', 'aliya', 'depeka'];
  const nayoks = ['allu aurjun', 'ranvir kapur', 'ranvir sing'];
  const villens = ['rockey', 'jockey', 'cokey', 'loky', 'baky', 'faky'];
  const directors = [
    {name: 'SS Rajamouli', work: 'RRR'},
    {name: 'Prosant Nill', work: 'KGF'},
    {name: 'Rajani kant', work: 'Robot-2.0'},
    {name: 'SRK', work: 'Pathan'}
  ]

  return (
    <div className="App">


  <Person nickName={villens[0]}></Person>

    {
      villens.map(villen => <Person  nickName={villen}></Person>)
    }


    {
      directors.map(director => <Friend  name={director.name} job={director.work}></Friend> )
    }








      <div className="container">
        <h2>Wellcome to react world</h2>
      </div>

      <div className='industry'>
        <p style={singerStyle}>Singer: {singer.name}, Job: {singer.job}, Salary:{salary + 2000}</p>
        <p style={{ backgroundColor: 'yellow', color: 'blue' }}>Nayok: {nayok.name}, Job: {nayok.job}, Salary:{salary + 4000}</p>
      </div>









      <Person nickName="Krishna" girl="Urmi" situation="Married"></Person>
      <Person nickName="Hridoy" girl="Aishee" situation="Un-Married"></Person>
      <Person nickName="Prince" girl="Parboti" situation="Married"></Person>

      <Person nickName={nayoks[0]} girl={nayekas[0]} ></Person>
      <Person nickName={nayoks[1]} girl={nayekas[1]} ></Person>
      <Person nickName={nayoks[2]} girl={nayekas[2]} ></Person>


      <h1>Start New Component</h1>
      <Friend></Friend>
      <Friend></Friend>





    </div>
  );
}

// Return HTML from a component:
function Person(props) {
  console.log(props);
  return (
    <div className='mohon'>
      <h2>{props.nickName} {props.girl}</h2>
      <p>{props.situation}</p>
    </div>
  );
}


function Friend(props) {
  return (
    <div className='friend'>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  );
}

export default App;
