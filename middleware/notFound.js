const notFound = (req, res) => {
  res.status(400).send('route not fuond');
};

module.exports = notFound;
