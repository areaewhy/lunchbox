import { useEffect, useRef, useState } from "react";

export default function Clock() {
  const interval = useRef();
  const [printedTime, setDate] = useState("WHO KNOWS");

  useEffect(() => {
    console.log("render");
    
    var now = new Date().toLocaleString();
    setDate(now);

    interval.current = setInterval(() => {
      console.log("tick");
      var now = new Date().toLocaleString();
      setDate(now);
    }, 1000);
    
    return () => {
      console.log("teardown");
      clearInterval(interval.current);
    };
  }, []);

  return <div>{printedTime}</div>;
}
