module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  format_date: (date) => {
    if (!date) {
      return "N/A"; // or some default value
    }
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  },
};
