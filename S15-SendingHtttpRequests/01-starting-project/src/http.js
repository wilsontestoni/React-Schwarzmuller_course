export async function fetchingAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return responseData.places;
}

export async function updateUsersPlaces(places) {''
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const resData = await response.json();

  if(!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData.message
}

export async function fetchingUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places")
  const responseData = await response.json()

  if(!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return responseData.places
}