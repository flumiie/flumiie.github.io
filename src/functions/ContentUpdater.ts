import { useMemo } from "react";
import ReactDOMServer from "react-dom/server";

function ContentUpdater({ content }: { content: JSX.Element }) {
  useMemo(() => {
    (document.getElementById("contents") as HTMLElement).innerHTML =
      ReactDOMServer.renderToStaticMarkup(content);
  }, [content]);

  return null;
}

export default ContentUpdater;
