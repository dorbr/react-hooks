import { useRef } from "react";
import { useState, useEffect } from "react";

import "./App.css";

import { Button } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

import data from "./data/data";

function App() {
  const inputEl = useRef();
  const buttonEl = useRef(null);

  const [value, setValue] = useState("");
  const [countries, setCountries] = useState(data.data);
  useEffect(() => {
    console.log(buttonEl.current.children[0].click());
  }, []);
  useEffect(() => {
    inputEl.current.value = value;
    const results = data.data.filter((country) => country.name.includes(value));
    console.log(results);
    setCountries(results);
    console.log(buttonEl.current.children[1]);
    if (buttonEl.current.children[1]) {
      console.log(buttonEl.current.children[1].classList.add("show"));
    }
  }, [value]);
  const hundleItemClicked = (e) => {
    console.log(inputEl.current);
    setValue(e.target.innerText);
    inputEl.current.value = e.target.innerText;
  };

  console.log(data.data);
  return (
    <div className="App flex w-screen h-screen bg-green-600 justify-center items-center">
      <div className="w-1/2 h-1/12 flex justify-center">
        <DropdownButton
          autoClose="inside"
          id="dropdown-basic-button"
          ref={buttonEl}
          className=""
          title=""
        >
          <div className="" style={{ height: "100px", overflowY: "scroll" }}>
            {countries.map((country) => (
              <Dropdown.Item
                key={country.name}
                href="#/action-1"
                className=""
                onClick={hundleItemClicked}
              >
                {country.name}
              </Dropdown.Item>
            ))}
          </div>
        </DropdownButton>
        <input
          ref={inputEl}
          className="w-3/4 px-4 text-black"
          placeholder="HELLO"
          onChange={() => {
            setValue(inputEl.current.value);
          }}
        ></input>
        <Button
          variant="danger"
          onClick={() => {
            setValue("");
          }}
        >
          X
        </Button>{" "}
      </div>
    </div>
  );
}

export default App;
