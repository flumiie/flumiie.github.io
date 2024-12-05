import "/src/css/page-contents-list-block.css";
import ListFlourish from "./ListFlourish";
import ListBlockOption from "./ListBlockOption";
import { Fragment } from "react/jsx-runtime";

interface ListBlockProps {
  pageContent: {
    icon: string;
    left: {
      image: string;
      header: string;
      text: string;
    };
    right: {
      image: string;
      header: string;
      text: string;
    };
  }[];
  currentTab: string;
  updateCurrentTab: (tab: string) => void;
}

const ListBlock = (props: ListBlockProps) => {
  function isSelected(tab: string) {
    return tab === props.currentTab ? " list-block-option-selected" : "";
  }

  return (
    <Fragment>
      <ListFlourish />

      <div id="content-block-list-contents">
        {Object.keys(props.pageContent).map((tab) => (
          <ListBlockOption
            key={tab}
            tab={tab}
            icon={props.pageContent[tab]?.icon}
            updateCurrentTab={() => props.updateCurrentTab(tab)}
            selected={isSelected(tab)}
          />
        ))}
      </div>

      <ListFlourish />
    </Fragment>
  );
};

export default ListBlock;
