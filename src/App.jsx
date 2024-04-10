import { PageOne } from "./components/PageOne";
import { ProgressBar } from "./components/ProgressBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { PageTwo } from "./components/PageTwo";
import { PageThree } from "./components/PageThree";
import { PageFour } from "./components/PageFour";
import { PageFive } from "./components/PageFive";
import { PageSix } from "./components/PageSix";

function App() {
  const [progress, setProgress] = useState(0);

  const handleProgress = (value) => {
    console.log(value);
    setProgress(value);
  };

  return (
    <BrowserRouter>
      <div>
        { progress === 5 ? null : 
        <ProgressBar progress={progress} />}
        <Routes>
          <Route index element={<PageOne handleProgress={handleProgress} />} />
          <Route path="/2" element={<PageTwo handleProgress={handleProgress} />} />
          <Route path="/3" element={<PageThree handleProgress={handleProgress} />} />
          <Route path="/4" element={<PageFour handleProgress={handleProgress} />} />
          <Route path="/5" element={<PageFive handleProgress={handleProgress} />} />
          <Route path="/6" element={<PageSix/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
