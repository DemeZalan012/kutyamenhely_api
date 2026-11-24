const adatok = require("../data/adatok");

function getAllKutyak() {
  return adatok.kutyak;
}

function getKutyaById(id) {
  return adatok.kutyak.find((kutya) => kutya.id === id);
}

function addKutya(nev, fajta, kor) {
  if (!nev || !fajta) {
    const hiba = new Error("A nev és a fajta kötelező.");
    hiba.statusCode = 400;
    throw hiba;
  }

  const kutya = {
    id: adatok.kovetkezoId,
    nev,
    fajta,
    kor,
  };

  adatok.kovetkezoId += 1;
  adatok.kutyak.push(kutya);

  return kutya;
}

module.exports = {
  getAllKutyak,
  getKutyaById,
  addKutya,
};
