import { useState, useMemo, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  // 直接return一個陣列或物件，可以使生成的陣列或物件不會重新建立新的記憶體位置
  const user = useMemo(() => {
    return [
      { id: 1, name: "apple" },
      { id: 2, name: "jack" },
    ];
  }, []);

  // 這裡是使用useEffect測試user有沒有被重新建立
  useEffect(() => {
    console.log("create user array");
  }, [user]);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      {value}
      <p>{user.id}</p>
      <p>{user.name}</p>
    </div>
  );
}

export default App;
