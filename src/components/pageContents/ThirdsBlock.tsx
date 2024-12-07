import "/src/css/page-contents.scss";

interface ThirdsBlockProps {
  shadow?: boolean;
  children: React.ReactNode;
}

const ThirdsBlock = ({ shadow = true, ...props }: ThirdsBlockProps) => {
  const hasShadow = () => (shadow ? " content-block-shadow" : "");

  return (
    <div className="thirds-block">
      <div className="thirds-block-content">
        <div className={"content-block" + hasShadow()}>{props.children}</div>
      </div>
    </div>
  );
};

export default ThirdsBlock;
