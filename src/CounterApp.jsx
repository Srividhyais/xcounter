import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2 style={styles.counterText}>Count: {count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  counterText: {
    fontSize: "24px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
  },
};

export default CounterApp;
