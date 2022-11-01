import "./App.css";
import bdd from "./assets/bdd/movies_rnexgr.json";
import Header from "./assets/components/Header";
import Section from "./assets/components/Section";

function App() {
  return (
    <>
      <Header />
      {bdd.map((section, index) => {
        return (
          <Section
            key={index}
            category={section.category}
            images={section.images}
          />
        );
      })}
    </>
  );
}

export default App;
