import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary" text="Primary" />
        <Button color="secondary" text="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert condition="error" message="This is error alert box" />
        <Alert condition="warning" message="This is warning alert box" />
        <Alert condition="info" message="This is info alert box" />
        <Alert condition="success" message="This is success alert box" />

      </div>
    </div>
  );
}

export default App;
