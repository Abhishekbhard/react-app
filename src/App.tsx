import ListGroup from "./components/ListGroup";
const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading="List" />
    </div>
  );
}
export default App;