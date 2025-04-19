import { H1, H2, H3, B1, L } from "./ui/Typography";
function App() {
  return (
    <div className="App">
      <H1>(H1) Heading , 32px bold </H1>
      <H2>This is a heading 2</H2>
      <H3>This is a heading 3</H3>
      <B1>
        (B1) Body text , 16px Regular Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </B1>
      <L>This is a label</L>
    </div>
  );
}

export default App;
