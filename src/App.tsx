import {
  BackgroundShapes,
  Navbar,
  NavbarBelowLine,
  PageArea,
  StyleOverlay,
} from "./components";
import { useState } from "react";
import UserData from "./userFiles/UserData";

import "./assets/bootstrap-icons-1.11.3/font/bootstrap-icons.css";
import "./css/index.css";

export const meta = () => {
  return [
    { title: "flumi's Commission Price List" },
    {
      name: "description",
      content: "Welcome to flumi's commission price list!",
    },
  ];
};

const getFirstTab = (page: string) => {
  const pageTabs = Object.keys(UserData.pageData[page].tabs);
  return pageTabs[0];
};

const App = () => {
  document.title = UserData.title;

  const pageTitles = Object.keys(UserData.pageData);

  const [currentPage, setCurrentPage] = useState(pageTitles[0]);
  const [offsetPage, setOffsetPage] = useState(pageTitles[0]);
  const [pageTimeoutID, setPageTimeoutID] = useState<number | null>(null);

  const [currentTab, setCurrentTab] = useState(getFirstTab(currentPage));
  const [offsetTab, setOffsetTab] = useState(getFirstTab(currentPage));

  const [pageOpacity, setPageOpacity] = useState(1);

  function updateCurrentPage(page: string) {
    if (pageTimeoutID) {
      clearTimeout(pageTimeoutID);
    }

    setPageOpacity(0);
    setOffsetPage(`${page}`);

    const setNewPage = () => {
      setCurrentPage(page);
      setCurrentTab(getFirstTab(page));
      setOffsetTab(getFirstTab(page));
      setPageOpacity(1);

      setPageTimeoutID(null);
    };

    setPageTimeoutID(setTimeout(setNewPage, 230));
  }

  return (
    <div>
      <BackgroundShapes />
      <Navbar
        userData={UserData}
        currentPage={offsetPage}
        updateCurrentPage={updateCurrentPage}
      />
      <PageArea
        currentPage={currentPage}
        currentTab={currentTab}
        updateCurrentTab={setCurrentTab}
        offsetTab={offsetTab}
        updateOffsetTab={setOffsetTab}
        pageOpacity={pageOpacity}
        pageContent={UserData.pageData[currentPage]?.tabs}
      />
      <NavbarBelowLine />
      <StyleOverlay />
    </div>
  );
};

export default App;
