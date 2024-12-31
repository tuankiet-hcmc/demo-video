import React, { useEffect } from "react";
import "./App.css";

export default function App() {
  const ref = React.useRef(null);

  useEffect(() => {
    if (ref.current) {
      navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        ref.current.srcObject = stream;
        ref.current.play();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [ref]);
  return (
    <div className="App">
      <video
        playsInline
        controls
        ref={ref}
        width="300"
      ></video>
    </div>
  );
}
