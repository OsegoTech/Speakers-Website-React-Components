import { useState } from "react";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";

function Speakers({ theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        theme={theme}
        setTheme={setTheme}
      />
      <SpeakersList  showSessions={showSessions}/>
    </>
  );
}

export default Speakers;
