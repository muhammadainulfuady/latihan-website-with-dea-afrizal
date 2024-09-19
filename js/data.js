const nama = "ainulfuady";
let usia = 18;

let biodata = document.getElementById("biodata");

function petugasKecamatan() {
  let pendaftaran;
  if (usia > 17 && usia < 26) {
    pendaftaran =
      "ainulfuady kamu seorang remaja yang cukup umur dan boleh membuat ktp 👍";
  } else if (usia > 25) {
    pendaftaran =
      "ainulfuady kamu sudah kelebihan umur karena membuat ktp harus maksimal umur 25";
  } else if (usia > 16) {
    pendaftaran =
      "kamu kurang 1 tahun untuk membuat ktp tahun depan baru boleh";
  } else if (usia > 4 && usia <= 10) {
    pendaftaran = "kamu masih anak anak untuk membuat ktp fuady 😭😭";
  } else {
    pendaftaran = "ainulfuady kamu masih bayi";
  }

  return (biodata.innerHTML = pendaftaran);
}

console.log(nama);
console.log(usia);
petugasKecamatan();
