import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert onCloseClick={() => setShowAlert(false)}>Alert</Alert>
      )}

      <Button color="danger" onClick={() => setShowAlert(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
