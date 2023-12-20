import { useState } from "react";

export default function App({ name }) {
  return (
    <>
      <h2>{name}</h2>
      <div className="container mx-w-xl mx-auto p-4 rounded-xl shadow-md hover:shadow-xl">
        <MyButton />
      </div>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick} className="btn">
      terklik {count} kali
    </button>
  );
}
