import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'steelblue'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Default",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
