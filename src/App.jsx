import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ChampionsTable from "./components/ChampionsTable";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="main-container">
        <Hero />
        <ChampionsTable />
        <Form />
      </main>
    </>
  );
}

export default App;