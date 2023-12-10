function DateCell({ getValue }) {
  const initialValue = getValue();
  const formattedDate = new Date(initialValue).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}

export default DateCell;
