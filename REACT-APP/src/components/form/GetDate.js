// calculate the current date
export const getFormatDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  return `${year}-${month}-${day}`;
};

// change the date format
export const formatDate = (birthDate) => {

  const setBirthDate = new Date(birthDate)
  const day = String(setBirthDate.getDate()).padStart(2,"0");
  const month = String(setBirthDate.getMonth() + 1).padStart(2,"0");
  const year = setBirthDate.getFullYear()

  const formattedDate = `${day}/${month}/${year}`
  
  const today = new Date()
  const age = today.getFullYear() - year;
  return {
    birthDateFormat: formattedDate,
    age
  }
}