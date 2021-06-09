import PropTypes from "prop-types";

const Section = ({ children }) => (
  <section className="Section">{children}</section>
);

Section.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Section;
