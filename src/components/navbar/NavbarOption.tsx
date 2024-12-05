import ButtonCursor from "../../images/button-cursor.png";

interface NavbarOptionProps {
  page: string;
  icon: string;
  active: string;
  updateCurrentPage: (page: string) => void;
}

const NavbarOption = (props: NavbarOptionProps) => {
  return (
    <span
      className="navbar-option-extension"
      onClick={() => props.updateCurrentPage(props.page)}
      role="button"
      tabIndex={0}
    >
      <div className={"navbar-option " + props.active}>
        <img className="button-cursor" src={ButtonCursor} alt="Cursor" />
        <button className="navbar-button">
          <i className={"bi-" + props.icon + " button-icon"} />
          <span className="button-text">{`${props.page}`.toUpperCase()}</span>
        </button>
      </div>
    </span>
  );
};

export default NavbarOption;
