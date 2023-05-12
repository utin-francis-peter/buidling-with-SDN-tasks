export const secsToMinsConverter = (secs) => {
  return secs / 60;
};

export const handleAgeFilter = (arr) => {
  return arr.filter((elem) => elem.age < 18);
};
