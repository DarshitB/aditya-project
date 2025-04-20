import { H1, H2, H3, B1, L } from "./ui/Typography";
import { Button, ButtonWithIcon, ButtonWithTextIcon } from "./ui";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <div className="App">
      <H1>(H1) Heading , 32px bold </H1>
      <H2>This is a heading 2</H2>
      <H3>This is a heading 3</H3>
      <B1>
        (B1) Body text , 16px Regular Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </B1>
      <L>This is a label</L>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          margin: "o auto",
        }}
      >
        <Button size="sm" variant="primary">
          Download
        </Button>
        <Button size="md" variant="secondary">
          Download
        </Button>
        <Button size="lg" variant="primary">
          Download
        </Button>
        <Button size="xl" variant="primary" disabled>
          Download
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          margin: "o auto",
        }}
      >
        <ButtonWithTextIcon size="sm" variant="primary">Download</ButtonWithTextIcon>
        <ButtonWithTextIcon size="md" variant="secondary">Download</ButtonWithTextIcon>
        <ButtonWithTextIcon size="lg" variant="primary">Download</ButtonWithTextIcon>
        <ButtonWithTextIcon size="xl" variant="primary" disabled>Download</ButtonWithTextIcon>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          margin: "o auto",
        }}
      >
        <ButtonWithIcon size="sm" variant="primary" />
        <ButtonWithIcon size="md" variant="secondary" />
        <ButtonWithIcon size="lg" variant="primary" />
        <ButtonWithIcon size="xl" variant="secondary" disabled/>
      </div>
      <br />
    </div> */}
      <AppRoutes />
    </>
  );
}

export default App;
