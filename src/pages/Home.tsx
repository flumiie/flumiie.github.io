import { useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import { HomeContents } from "../contents";

function Home() {
  useMemo(() => {
    (document.getElementById('contents') as HTMLElement).innerHTML = ReactDOMServer.renderToStaticMarkup(<HomeContents />);
    return null;
  }, []);

  return null;
}

export default Home;
