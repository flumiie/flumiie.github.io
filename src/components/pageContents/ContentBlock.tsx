import { Fragment } from "react/jsx-runtime";
import "/src/css/page-contents-blocks.css";

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
      const image = `/src/userFiles/images/${props.data.image}`;

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

  return (
    <Fragment>
      <div className="content-block-header">
        <p className="content-block-text" style={getOpacity()}>
          {props.data.header}
        </p>
      </div>
      {getImage()}
      <p className="content-block-text" style={getOpacity()}>
        {props.data.text}
      </p>
    </Fragment>
  );
};

export default ContentBlock;
