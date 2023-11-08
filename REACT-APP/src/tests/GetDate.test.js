import { getFormatDate,formatDate } from "../components/form/GetDate.js";

test("getFormateDate returns the current date in the correct format", () => {
  const formattedDate = getFormatDate();

  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  const expectedDate = `${year}-${month}-${day}`;
  expect(formattedDate).toBe(expectedDate)
});

// formatDate
test("returns an object with formatted birth date and age", () => {
  const result = formatDate("04/12/2004")

  expect(result).toEqual({
    birthDateFormat: "12/04/2004",
    age: new Date().getFullYear() - 2004
  })
})
 
test("throws an error if the input is malformed", () => {
  expect(() => formatDate("2004-04-12")).toThrowError("Invalid date format");
});

