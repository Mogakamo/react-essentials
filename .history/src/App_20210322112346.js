import './App.css';

function Header() {
  return (
  <h1>Eve's Kitchen</h1>
  )
}

function Main() {
  return (
    <section>
      <p>We</p>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Main</h2>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
