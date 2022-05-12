import { format, parseISO } from "date-fns";

export const dateAsString = (dateString = String(new Date())) =>
  format(new Date(parseISO(dateString)), "yyyy-MM-dd");

export const datetime = (dateString = String(new Date())) =>
  new Date(parseISO(dateString)).toISOString();
