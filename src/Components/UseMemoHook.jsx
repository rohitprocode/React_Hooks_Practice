import React, { useMemo, useRef, useState } from "react";
import { InitialItems } from "./SelectedItemUseMemo";

function UseMemoHook() {
  const [Counter, setCounter] = useState(100);
  const [items] = useState(InitialItems);

  const IncreFunc = () => {
    setCounter(Counter + 1);
  };

  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

  console.log("Component Rendered");
  return (
    <div>
      <h1>This is a useMemo Hook</h1>
      <p>
        <strong>useMemo</strong> is a react hook that memoizes a value and
        returns the same value until any of the dependencies in the dependency
        array changes,until then it will recompute a new value.
      </p>
      <h2>{Counter}</h2>
      <button onClick={IncreFunc}>Increment</button>
      <h1>Selected Item:{selectedItem?.id}</h1>
    </div>
  );
}

export default UseMemoHook;
