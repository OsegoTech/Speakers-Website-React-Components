import { useState } from "react";

function useSpeakerFilter(startingShowSessions){
    const [showSessions, setShowSessions] = useState(startingShowSessions);

    // function toggleSessions(){
    //     setShowSessions(!showSessions);
    // }

    return {showSessions, setShowSessions};
}

export default useSpeakerFilter;