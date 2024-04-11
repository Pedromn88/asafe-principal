export const formatDate = (dateTime) => {
  const originalDate = dateTime;

  // Create a date object from the original string
  const date = new Date(originalDate);

  // Get the date components
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based in JavaScript, so we add 1
  const year = date.getFullYear();
  const hour = date.getHours();

  // Format the date in the desired format (e.g., "MM/DD/YYYY HH:MM:SS")
  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

export const formatDateFech = (datetime) => {
  const originalDate = datetime;
  // Convert the date to a Date object
  const date = new Date(originalDate);

  // Get date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero if month is less than 10
  const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if day is less than 10
  const hour = String(date.getHours()).padStart(2, "0"); // Add leading zero if hour is less than 10
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Add leading zero if minutes is less than 10

  // Format the date in desired format
  const formattedDate = `${year}-${month}-${day}T${hour}:${minutes}`;

  return formattedDate;
};
