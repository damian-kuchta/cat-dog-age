import "./App.css";
import { useContext } from "react";

import AppContext from "./store/app-context";
import Header from "./components/Layout/Header/Header";
import AnimalChoice from "./components/StartPage/AnimalChoice";
import CalculateAgeForm from "./components/Form/CalculateAgeForm";
import Result from "./components/Result/Result";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  const ctx = useContext(AppContext);

  return (
    <div className="App">
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
      {!ctx.form.inputIsFocused && <Footer />}
    </div>
  );
}

export default App;
