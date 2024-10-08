import { Losschart } from "./definitions";

export const formatDateToLocal = (
  date: string | Date,
  locale: string = "en-US"
) => {
  return _formatDateToLocal(date, locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatDateAndTimeToLocal = (
  date: string | Date,
  locale: string = "en-US"
) => {
  return _formatDateToLocal(date, locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const _formatDateToLocal = (
  date: string | Date,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions
) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(dateObj);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
