import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Reel } from "./components/reel";
import { Section } from "./components/common/section";
import { Highlight } from "./components/highlight";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="bg" />
        <div className="content">
          <Section>
            <Reel />
          </Section>
          <Section>
            <Highlight />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;
