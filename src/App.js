import Title from "../src/components/Title";
import SubTitle from "./components/SubTitle";
import NicePragrapes from "./components/NicePragrapes";
import "./App.css";

/**
 * It returns a div with a Title, SubTitle, and NicePragrapes component
 * @returns a div with a title, subtitle, and a paragraph.
 */
export default function App() {
  return (
    <div className="App">
      <Title />
      <SubTitle />
      <NicePragrapes
        paragraph={[
          "Hey pal",
          "what name would you call a dog that has no both legs?",
          "well it does not matter what name you might call him",
          "trust me he is not coming!",
        ]}
      />
    </div>
  );
}
