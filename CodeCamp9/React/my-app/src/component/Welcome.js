import ProductItem from "../ProductItem";
function Welcome(props) {
  return <div>Hello World of React. My first React Project</div>;
}

function Greeting(props) {
  return <div>Greeting Component</div>;
}

function MyComponent(props) {
  return (
    <div>
      This is MyComponent
      <ProductItem />
    </div>
  );
}
const PI = 3.14;
export { Welcome, Greeting, PI };
export default MyComponent;
