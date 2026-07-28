import { useEffect, useState } from "react";

export default function GalleryOverview() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("Shrouk");
  const [log, setLog] = useState([]);

  function addLog(message) {
    setLog((prev) => [...prev, message]);
  }
  useEffect(() => {
    addLog(`useEffect without Dependency Array running - render happened`);
  });
  useEffect(() => {
    addLog(`useEffect with [] running - Component mounted`);
  }, []);
  useEffect(() => {
    addLog(`useEffect with [counter] running - counter = ${counter}`);
  }, [counter]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval Fired...");
    }, 3000);

    addLog(`useEffect with Cleanup ran - Interval started`);

    return () => {
      clearInterval(intervalId);
      addLog(`Cleanup ran - Interval cleared (before re-running or on Unmount)`);
    };
  }, []);

  return (
    <div>
      <div className="d-flex gap-4 align-items-center bg-light p-3 rounded mb-3">
        <h4 className="m-0">Counter: {counter}</h4>
        <h4 className="m-0">Name: {userName}</h4>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
          Increment Counter (will trigger useEffect with [counter])
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setUserName(userName === "Shrouk" ? "Shahd" : "Shrouk")}
        >
          Change Name (will trigger useEffect without Dependency)
        </button>
        <button className="btn btn-outline-danger" onClick={() => setLog([])}>
          Clear Log
        </button>
      </div>

      <div className="border rounded p-3" style={{ maxHeight: 220, overflowY: "auto" }}>
        <strong>useEffect Execution Log:</strong>
        <ol className="mb-0">
          {log.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}