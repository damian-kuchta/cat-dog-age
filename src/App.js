import "./App.css";
import getWindowHeight from "./utils/getWindowHeight";
import { useState, useEffect, useContext } from "react";
import AppContext from "./store/app-context";
import Header from "./components/Layout/Header/Header";
import AnimalChoice from "./components/StartPage/AnimalChoice";
import CalculateAgeForm from "./components/Form/CalculateAgeForm";
import Result from "./components/Result/Result";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  const [appHeight, setAppHeight] = useState();
  const ctx = useContext(AppContext);

  useEffect(()=> {
    setAppHeight(getWindowHeight());
    window.addEventListener("resize", () => {
      setAppHeight(getWindowHeight());
    }, []);
  })

  return (
    <div className="App" style={{ height: appHeight }}>
      <Header />
      <main>
        {ctx.animalIsChosen ? (
          false
        ) : (
          <section className="animal-choice-wrapper">
            <AnimalChoice onClick={ctx.chooseAnimal} animalType="cat" />
            <AnimalChoice onClick={ctx.chooseAnimal} animalType="dog" />
          </section>
        )}
        {ctx.animalIsChosen && !ctx.form.formIsSubmitted && (
          <section>
            <CalculateAgeForm animalType={ctx.form.animalType} />
          </section>
        )}
      </main>
      {ctx.form.formIsSubmitted && ctx.animalIsChosen && <Result />}
      {!ctx.animalIsChosen && <Footer />}
    </div>
  );
}

export default App;
