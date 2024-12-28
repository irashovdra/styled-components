import { EventsList } from "./components/EventsList/EventsList.jsx";
import events from "./data/upcoming-events.json";

const App = () => {
  return <EventsList events={events} />;
};

export default App;
