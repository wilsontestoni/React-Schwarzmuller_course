import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchingAvailablePlaces } from "../http.js"

export default function AvailablePlaces({ onSelectPlace }) {
  const [fetchingData, setFetchingData] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchingData = async () => {
      setFetchingData(true);

      try {
        
        const places = await fetchingAvailablePlaces()

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );

          setAvailablePlaces(sortedPlaces);
          setFetchingData(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || "could not fetch places, please try again later",
        });
        setFetchingData(false);
      }
    };

    fetchingData();
  }, []);

  if (error) {
    return <ErrorMessage title="an error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetchingData}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
