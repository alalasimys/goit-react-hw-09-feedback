import PropTypes from "prop-types";

const Section = ({ children }) => <>{children}</>;

Section.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Section;
