import './App.css';

function Header(props) {
  console.log(props);
  return (
  <h1>{props.name} Kitchen</h1>
  )
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious foods here.</p>
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
      <Footer />
    </div>
  );
}

export default App;
