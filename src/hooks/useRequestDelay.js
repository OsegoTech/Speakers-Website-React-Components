import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        // throw "fake error";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }

    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    async function delayFunction() {
      try{
        setData(newRecords);
      await delay(delayTime);
      if (doneCallback) {
        doneCallback();
      }
      } catch (e) {
        console.log("error thrown inside delayFunction", e);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    }

    delayFunction();
  }

  // function onFavoriteToggle(id) {
  //   const speakerRecPrevious = speakersData.find(function (rec) {
  //     return rec.id === id;
  //   });
  //   const speakerRecUpdated = {
  //     ...speakerRecPrevious,
  //     favorite: !speakerRecPrevious.favorite,
  //   };
  //   const speakersDataNew = speakersData.map(function (rec) {
  //     return rec.id === id ? speakerRecUpdated : rec;
  //   });
  //   setSpeakersData(speakersDataNew);
  // }

    return { data, requestStatus, error, updateRecord };
}

export default useRequestDelay;
