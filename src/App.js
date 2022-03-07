import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR ", keyword);
    }
  }, [keyword]);
  useEffect(() => {
      console.log("counter changed");
  }, [counter]);
  useEffect(() => {
    console.log("keyword and counter changed");
}, [keyword, counter]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;