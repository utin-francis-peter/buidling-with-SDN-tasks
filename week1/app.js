export const secsToMinsConverter = (secs) => {
  return secs / 60;
};

export const handleAgeFilter = (arr) => {
  return arr.filter((elem) => elem.age < 18);
};

export const handleFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.log(error.message);
  }
};
