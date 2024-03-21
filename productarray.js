var people = [
  {
    nama: "Monitor",
    harga: 12000000,
    keterangan: "masih ada",
  },
  {
    nama: "PC",
    harga: 7000000,
    keterangan: "No Minus",
  },
  {
    nama: "Bunga",
    harga: 7000000,
    keterangan: "barang second",
  },
  {
    nama: "Meja",
    harga: 12300000,
    keterangan: "selengkapnya",
  },
  {
    nama: "Kursi",
    harga: 7000000,
    keterangan: "masih ada",
  },
  {
    nama: "Knalpot",
    harga: 130000,
    keterangan: "tinggal 3",
  },
  {
    nama: "Meja",
    harga: 12300000,
    keterangan: "selengkapnya",
  },
  {
    nama: "Kursi",
    harga: 7000000,
    keterangan: "masih ada",
  },
  {
    nama: "Knalpot",
    harga: 130000,
    keterangan: "tinggal 3",
  },
];

// Function to create a card for each person and append it to the container
function createCard(person) {
  var card = document.createElement("div");
  card.classList.add("card");

  var nama = document.createElement("h2");
  nama.textContent = "Nama produk : " + person.nama;

  var harga = document.createElement("p");
  harga.textContent = "Harga produk : " + person.harga;

  var keterangan = document.createElement("p");
  keterangan.textContent = "Keterangan : " + person.keterangan;

  card.appendChild(nama);
  card.appendChild(harga);
  card.appendChild(keterangan);

  document.getElementById("cards-container").appendChild(card);
}

// Loop through the array of people and create a card for each one using forEach
people.forEach(function (person) {
  createCard(person);
});

// Menampilkan data objek di dalam elemen card HTML (jika hanya satu objek)
// document.getElementById("pertama").textContent = "Name: " + person.nama;
// document.getElementById("kedua").textContent = "Age: " + person.harga;
// document.getElementById("ketiga").textContent = "Occupation: " + person.keterangan;

// menampilkan object ke dalam console
// console.log(praktek);
// Object.keys(praktek).forEach(function (nama) {
//   console.log(nama, praktek[nama]);
// });
