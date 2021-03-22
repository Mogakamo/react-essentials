import './App.css';
import props from 'prop-types'

function Header(props) {
  console.log(props);
  return (
  <h1>{props.name} Kitchen</h1>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} foods here.</p>
        <ul>
          {props.dishes.map((dish) =>  
            (<li>{dish}</li>)
            )}
        </ul>
    </section>
  )
}

function Footer (props) {
  return (
    <p>&copy; {props.year} </p>
  )
}


const dishes = [
  "MAcaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];



function App() {
  return (
    <div className="App">
      <Header 
          name="Cindy"
           />
      <Main 
        adjective="amazing" />
      <Footer
        year={new Date().getFullYear() } />
    </div>
  );
}

export default App;
