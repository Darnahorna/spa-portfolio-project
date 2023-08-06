import { getResponse } from "../../request.js";

export const getTime = () => {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let now = new Date();

  let currentDate = now.getDate();
  let currentMonth = month[now.getMonth()]; //using index of array
  let currentYear = now.getFullYear();

  return `${currentDate} ${currentMonth} ${currentYear}`;
};

export async function getUserId() {
  const userId = await getResponse("/user", "get");
  return userId.data;
}
