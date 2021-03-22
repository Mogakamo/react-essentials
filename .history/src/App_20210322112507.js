import './App.css';

function Header() {
  return (
  <h1>Eve's Kitchen</h1>
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
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
