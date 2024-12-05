interface ListBlockOptionProps {
  tab: string;
  icon: string;
  selected: string;
  updateCurrentTab: () => void;
}

const ListBlockOption = (props: ListBlockOptionProps) => {
  return (
    <div
      className={"list-block-option" + props.selected}
      onKeyDown={props.updateCurrentTab}
      onClick={props.updateCurrentTab}
      role="button"
      tabIndex={0}
    >
      <hr className="list-selection-top" />
      <p className="list-block-text">
        <i className={"bi-" + props.icon + " list-block-option-icon"} />
        {props.tab}
      </p>
      <hr className="list-selection-bottom" />
    </div>
  );
};

export default ListBlockOption;
