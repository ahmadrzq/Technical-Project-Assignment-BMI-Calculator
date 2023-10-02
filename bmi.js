// Mengambil element form
const form = document.getElementById("form");

// Event submit form
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Ambil value input bb dan tb
    const beratBadan = document.getElementById("weight").value;
    const tinggiBadan = document.getElementById("height").value;

    // Menghitung bmi dan menentukan kategori
    let bmi = bodyMassIndex(beratBadan, tinggiBadan);
    let bmiCategories = bodyMassIndexCategories(bmi);

    // Mengambil element result dan mereset elemennya ketika ada submit
    const result = document.getElementById("result");
    result.innerHTML = ``;

    // Membuat elemen baru di dalam element result ketika ada submit
    if (!bmi || !bmiCategories) {
      const newResult = document.createElement("p");
      newResult.innerHTML = `Your BMI Invalid`;
      result.appendChild(newResult);
    } else {
      const newResult = document.createElement("p");
      newResult.innerHTML = `Your BMI is <span id="bmi-result"></span> which means You are
        <span id="bmi-result-categories"></span>`;
      result.appendChild(newResult);
    }

    // Menampilkan bmi
    let bmiResult = document.getElementById("bmi-result");
    bmiResult.innerHTML = bmi;

    // Menampilkan bmi categories
    const bmiResultCategories = document.getElementById(
      "bmi-result-categories"
    );
    bmiResultCategories.innerHTML = bmiCategories;
  });
}

// Fungsi menghitung BMI
function bodyMassIndex(weight, height) {
  if (weight <= 0 || height <= 0) {
    return false;
  } else {
    let result = weight / (height / 100) ** 2;
    return result.toFixed(1);
  }
}

// Fungsi menentukan kategori bmi
function bodyMassIndexCategories(bmi) {
  if (bmi) {
    if (bmi < 18.5) {
      return `Underweight`;
    } else if (bmi <= 24.9) {
      return `Normal`;
    } else if (bmi <= 29.9) {
      return `Overweight`;
    } else {
      return `Obesity`;
    }
  } else {
    return false;
  }
}
