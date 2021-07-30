import Hello from "./componemy/Hello";
import Header from "./componemy/Header";
import Footer from "./componemy/Footer";
function App() {
  return (
    <div>
      <Header />
      <Hello name='John' />
      <Hello name='Jack' />
      <Hello name='Jane' />
      <Footer />
    </div>
  );
}

export default App;
