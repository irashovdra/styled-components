import React from "react";
import PropTypes from "prop-types";
import { StyledEvent, StyledText } from "./EventsListItem.js";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export const EventsListItem = ({ name, location, speaker, type, time }) => {
  return (
    <StyledEvent>
      <h2>{name}</h2>

      <StyledText>
        <FaLocationDot />
        {location}
      </StyledText>
      <StyledText>
        <FaUser />
        {speaker}
      </StyledText>
      <StyledText>
        <MdOutlineAttachMoney />
        {type}
      </StyledText>
      <p className="time">
        {" "}
        <FaCalendarAlt />
        {time.start}
      </p>
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
