import './App.css';

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
    </section>
  )
}

function Footer () {
  return (
    <p>It's true</p>
  )
}

function App() {
  return (
    <div className="App">
      <Header 
          name="Cindy"
           />
      <Main 
        adjective="amazing" />
      <Footer
       />
    </div>
  );
}

export default App;
