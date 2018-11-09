const validTitle = title => {
  const uppercasedTitle = title
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  return uppercasedTitle.replace(/[\W_]+/g, " ");
};
export default validTitle;
