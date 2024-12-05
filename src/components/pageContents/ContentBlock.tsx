import { Fragment } from "react/jsx-runtime";
import "/src/css/page-contents-blocks.css";
import React from "react";
import parse from "html-react-parser";

interface ContentBlockProps {
  data: {
    image: string;
    header: string;
    text: string;
  };
  contentOpacity: number;
}

const ContentBlock = (props: ContentBlockProps) => {
  const getOpacity = () => {
    return { opacity: props.contentOpacity };
  };

  const getImage = () => {
    if (props.data.image) {
      const image = `/images/${props.data.image}`;

      return (
        <div className="content-block-image-block" style={getOpacity()}>
          <img
            className="content-block-image"
            src={image}
            alt="Pic from user data"
          />
          {props.data.text ? (
            <hr className="content-block-image-divider" />
          ) : null}
        </div>
      );
    }

    return null;
  };

  const text = () => {
    const url = props.data.text.match(/https?:\/\/[^\s]+/g);

    return (
      <p className="content-block-text" style={getOpacity()}>
        {props.data.text.split(/https?:\/\/[^\s]+/).map((S, index) => {
          const URLParsed = parse(
            `<a style="text-decoration:underline" href="${url?.[index]}" target="_blank">${url?.[index]}</a>`
          );
          return (
            <>
              {S}
              {(URLParsed as React.JSX.Element).props.children !== "undefined"
                ? URLParsed
                : null}
            </>
          );
        })}
      </p>
    );
  };

  return (
    <Fragment>
      <div className="content-block-header">
        <p className="content-block-text" style={getOpacity()}>
          {props.data.header}
        </p>
      </div>
      {getImage()}
      {text()}
    </Fragment>
  );
};

export default ContentBlock;
