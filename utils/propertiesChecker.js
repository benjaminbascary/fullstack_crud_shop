function checkProperties(product) {
  for (let property in product) {
    if (!!product[property] === false) {
      return false;
    }
  }
  return true;
}

module.exports = checkProperties;