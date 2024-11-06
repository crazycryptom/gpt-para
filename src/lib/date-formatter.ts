import { format, isToday } from "date-fns";

export const formatDate = (date: Date, options = {}) =>
    isToday(date) ? "Today" : format(date, "dd.mm.yyyy", options);

// console.log(formatDate(new Date("2023-01-01")))