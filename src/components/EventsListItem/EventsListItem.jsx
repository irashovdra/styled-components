import React from "react";
import PropTypes from "prop-types";
import { StyledEvent, StyledText } from "./EventsListItem.js";

export const EventsListItem = ({ name, location, speaker, type, time }) => {
  return (
    <StyledEvent>
      <h2>{name}</h2>
      <StyledText>{location}</StyledText>
      <StyledText>{speaker}</StyledText>
      <StyledText>{type}</StyledText>
      <p className="time">{time.start}</p>
    </StyledEvent>
  );
};

EventsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
};
