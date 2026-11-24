const kutyaService = require("../services/kutya.service");

function listKutyak(req, res) {
  res.json(kutyaService.getAllKutyak());
}

function getKutya(req, res) {
  const id = Number(req.params.id);
  const kutya = kutyaService.getKutyaById(id);

  if (!kutya) {
    return res.status(404).json({ hiba: "Nincs ilyen kutya." });
  }

  return res.json(kutya);
}

function createKutya(req, res, next) {
  try {
    const { nev, fajta, kor } = req.body;
    const kutya = kutyaService.addKutya(nev, fajta, kor);
    return res.status(201).json(kutya);
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(400).json({ hiba: error.message });
    }

    return next(error);
  }
}

module.exports = {
  listKutyak,
  getKutya,
  createKutya,
};
