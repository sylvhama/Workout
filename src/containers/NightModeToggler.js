import React from "react";
import { connect } from "react-redux";
import { toggleNightMode } from "../actions";
import Button from "../components/Button";

const mapStateToProps = state => ({
  nightMode: state.nightMode
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(toggleNightMode());
  }
});

function NightModeButton({ nightMode, onClick }) {
  return (
    <Button
      aria-label={nightMode ? "Enable light mode" : "Enable dark mode"}
      onClick={onClick}
    >
      {nightMode ? "🌞" : "🌜"}
    </Button>
  );
}

const NightModeToggler = connect(
  mapStateToProps,
  mapDispatchToProps
)(NightModeButton);

export default NightModeToggler;
