const { getOptions } = require("loader-utils");
const data = require("../data");

module.exports = function(source) {
  const options = getOptions(this);
  options.terms.forEach(term => {
    const searchTerm = term.slice(2, -2).toString();
    source = source.replace(new RegExp(term, "g"), data[searchTerm]);
  });
  const content = source;
  return content;
};
