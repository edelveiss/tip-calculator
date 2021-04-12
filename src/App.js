import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [formState, setFormState] = useState({
    price: "",
    tipPercent: "",
    numberOfPeople: 1,
  });
  return (
    <div className="App">
      <Header totalAmount={totalAmount} tip={formState.tipPercent} />
      <Form
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        formState={formState}
        setFormState={setFormState}
      />
      <Footer />
    </div>
  );
}

export default App;
