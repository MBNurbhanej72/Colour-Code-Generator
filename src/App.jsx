import "./App.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Values from "values.js";
import ColorBox from "./components/ColorBox";

const App = () => {

  const [colorName, setColorName] = useState("#003049");

  const [selectValue, setSelectValue] = useState(10);

  const [colorList, setColorList] = useState(new Values("#003049").all(100 / selectValue));


  useEffect(() => {
    handleSubmit;
  }, [selectValue]);


  const handleSubmit = e => {
    e.preventDefault();

    try {
      const colors = new Values(colorName).all(100 / selectValue);

      setColorList(colors);
    } catch (e) {
      toast.error("Invalid colour code!");
    }
  };


  const handlePaste = async () => {
    setColorName(await navigator.clipboard.readText());
  };


  return (
    <>
      <div className="upper">
        <h1 style={{ color: "#19455b" }}>Colour Code Generator</h1>

        <form onSubmit={e => handleSubmit(e)}>
          <div className="input-div">
            <select className="input" value={selectValue} onChange={e => setSelectValue(Number(e.target.value))}>
              <option value="" disabled>Select (%)</option>
              <option value="5">20%</option>
              <option value="10">10%</option>
              <option value="20">5%</option>
              <option value="50">2%</option>
              <option value="100">1%</option>
            </select>

            <input type="text" className="input" value={colorName} onChange={e => setColorName(e.target.value)} placeholder="Ex: #003049" />
          </div>

          <div className="btn-div">
            <button type="submit" className="submit-btn">Get Shades</button>

            <button type="submit" className="submit-btn" onClick={handlePaste}>Paste Code</button>
          </div>
        </form>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {colorList.map((color, i) => (
          <ColorBox key={i} color={color} />
        ))}
      </div>
    </>
  );
};

export default App;
