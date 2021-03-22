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

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
