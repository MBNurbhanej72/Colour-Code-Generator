import { useEffect, useState } from "react";
import "../App.css";

const ColorBox = ({ color }) => {

  const [alert, setAlert] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setAlert(false), 3000);

    return () => clearTimeout(timer);
  }, [alert]);


  const handleCopy = async (hexValue) => {
    await navigator.clipboard.writeText("#" + hexValue);
    setAlert(true);
  };



  return (
    <div onClick={() => handleCopy(color.hex)} className="colorBox" style={{ backgroundColor: `#${color.hex}`, color: (color.type === "shade" || color.type === "base") ? "white" : "black" }}>

      <span style={{ background: "transparent", textAlign: "center", lineHeight: 1.8 }}>
        #{color.hex}
        <br />
        {alert ? "Copied Text" : "Click to Copy"}
      </span>
    </div>
  );
};

export default ColorBox;
