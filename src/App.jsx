import { Routes, Route } from "react-router-dom";
import Context from "./context";

import MainLayout from "./componets/MianLayout/MainLayout";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Context.Provider value={{}}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/*<Route path="courses/" element={<Courses />} />
          <Route path="courses/:slug" element={<SingleCourse />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
