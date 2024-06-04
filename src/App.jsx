import "./App.css";
import {
  ErrorAlert,
  SuccessAlert,
  WarningAlert,
  InfoAlert,
} from "./components/Alert";
import { PrimaryButton, SecondaryButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <h1>Button</h1>
        {<PrimaryButton />}
        {<SecondaryButton />}
        Render ตัว Button 2 แบบ
      </div>
      <hr />
      <h1>Alert Component</h1>
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        {<ErrorAlert />}
        {<WarningAlert />}
        {<InfoAlert />}
        {<SuccessAlert />}
      </div>
    </div>
  );
}

export default App;
