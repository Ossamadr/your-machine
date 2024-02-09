const input = document.getElementById("priceId");
const warning = document.getElementById("warning");
const qtt = document.getElementById("Qtt");
let price = document.getElementById("price");
input.addEventListener("input", function () {
  if (parseInt(this.value) > 10 || parseInt(this.value) < 1) {
    warning.style.display = "block";
    qtt.style.display = "none";
  } else if (this.value == "") {
    price.innerHTML = 26000;
  } else {
    warning.style.display = "none";
    qtt.style.display = "block";
    price.innerHTML = +price.innerHTML * input.value;
  }
});
function checkPhoneNumber(input) {
  let phoneNumber = input.value;
  let phoneError = document.getElementById("phone-error");
  if (!/^0\d{9}$/.test(phoneNumber)) {
    phoneError.style.display = "inline";
  } else {
    phoneError.style.display = "none";
  }
}

function validateForm() {
  var isValid = true;
  var inputs = document.querySelectorAll(
    '.form input[type="text"], .form select'
  );
  inputs.forEach(function (input) {
    if (!input.value) {
      isValid = false;
      input.style.border = "2px solid red";
    } else {
      input.style.border = ""; // إعادة تعيين الحدود الافتراضية
    }
  });
  if (!isValid) {
    alert("يرجى ملىء الحقول الفارغة");
  }

  return isValid;
}
