function notFound(req, res) {
  return res.status(404).json({ hiba: "Nincs ilyen útvonal." });
}

function errorHandler(error, req, res, next) {
  console.error(error);

  const statusCode = error.statusCode || 500;
  const message = error.message || "Valami hiba történt.";

  return res.status(statusCode).json({ hiba: message });
}

module.exports = {
  notFound,
  errorHandler,
};
