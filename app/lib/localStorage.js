//gets cities from local storage
export const loadCities = () => {
  try {
    const storedCities = localStorage.getItem("cities");
    if (storedCities === null) {
      return [];
    }
    return JSON.parse(storedCities);
  } catch (err) {
    return [];
  }
};

//add search history to local storage
export const saveCities = (cityData) => {
  try {
    const savedCities = JSON.stringify(cityData);
    localStorage.setItem("cities", savedCities);
  } catch {
    console.log("local storage disabled");
  }
};
