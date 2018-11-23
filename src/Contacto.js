import React from "react";
import { bool } from "prop-types";
import { connect } from "react-redux";

const Contacto = props => {
  const { isMobile } = props;

  return (
    <div className="Contacto">
      <h1>Contacto</h1>

      <p>
        You are using:
        <strong>{isMobile ? "mobile" : "desktop"}</strong>
      </p>
    </div>
  );
};

Contacto.propTypes = {
  isMobile: bool
};

function mapStateToProps(state) {
  return {
    isMobile: state.device.isMobile
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacto);
