import { BrowserRouter, Routes as DOMRoutes, Route } from "react-router-dom";
import "./assets/styles/timeline.scss";
import { Home, Layout } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <DOMRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </DOMRoutes>
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

export default Routes;