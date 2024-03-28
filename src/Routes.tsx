import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/timeline.scss";
import { Home, Layout, Students } from "./pages";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<Students />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
  // return (
  //   <main className="content-container">
  //     <Navbar />
  //     <Home />
  //     <Students />
  //   </main>
  // );
};
