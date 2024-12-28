import React from "react";
import PropTypes from "prop-types";
import { EventsListItem } from "../EventsListItem/EventsListItem.jsx";
// import { StyledList } from "./EventsList.js";
import {StyledList} from "./EventList.js"

export const EventsList = ({ events }) => {
  return (
    <StyledList>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventsListItem
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          time={time}
        />
      ))}
    </StyledList>
  );
};

EventsList.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
};
