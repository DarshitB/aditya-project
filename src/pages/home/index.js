import React from "react";
import { H1, H2, H3, B1, L } from "../../ui/Typography";
import "./index.scss";

function Home() {
  return (
    <div>
      <H1>Typography:</H1>
      <br />
      <H1 className="fonnt-name">Pixeloid Sans</H1>
      <H1>Pixeloid Sans </H1>
      <H1>(H1) Heading , 32px bold </H1>
      <H2>(H2) Subheadings , 24px bold</H2>
      <H3>(H3) Section Titles , 20px bold</H3>
      <B1>
        (B1) Body text , 16px Regular <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit, sed do eiusmod tempor incididunt ut labore et <br />
        dolore magna aliqua.
      </B1>
      <L>Labels (L), 14px Regular bold</L>
    </div>
  );
}

export default Home;
