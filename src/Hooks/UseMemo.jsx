import React, { useState, useMemo } from "react";

export default function UseMeno() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const sum = (from, to) => {
    let count = 0;
    for (let i = from; i <= to; i++) {
      count += i;
    }
    return count;
  };

  console.time('timer');
  const result = useMemo(() => sum(from, to), [from, to]);
  console.timeEnd('timer');

  return (
    <div>
      <h1>{result}</h1>
      <input
        type="number"
        onChange={e => {
          setFrom(Number(e.target.value));
        }}
      />
      <input
        type="number"
        onChange={e => {
          setTo(Number(e.target.value));
        }}
      />
    </div>
  );
}
