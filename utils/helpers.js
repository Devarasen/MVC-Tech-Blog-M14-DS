module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_date: (date) => {
    if (!date) {
      return "N/A"; // or some default value
    }
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };

    const formattedDate = date.toLocaleDateString("en-AU", options);
    return formattedDate.replace("GMT", "AEST");
  },
};
