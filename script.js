// ================================================
//  script.js - Form Validation Logic
// ================================================


// ---- Helper: mark field as invalid ----
function setError(fieldId, message) {
  var inputEl = document.getElementById(fieldId);
  var errEl   = document.getElementById(fieldId + "-err");

  inputEl.classList.add("err");
  inputEl.classList.remove("ok");

  if (message) {
    errEl.textContent = message;
  }
  errEl.classList.add("show");
}


// ---- Helper: mark field as valid ----
function setSuccess(fieldId) {
  var inputEl = document.getElementById(fieldId);
  var errEl   = document.getElementById(fieldId + "-err");

  inputEl.classList.remove("err");
  inputEl.classList.add("ok");
  errEl.classList.remove("show");
}


// ---- Main Validation Function ----
function validateForm() {

  var isFormValid = true;


  // 1. First Name - only letters, min 2 chars
  var fname = document.getElementById("fname").value.trim();
  if (!/^[A-Za-z]{2,}$/.test(fname)) {
    setError("fname");
    isFormValid = false;
  } else {
    setSuccess("fname");
  }


  // 2. Last Name - only letters, min 2 chars
  var lname = document.getElementById("lname").value.trim();
  if (!/^[A-Za-z]{2,}$/.test(lname)) {
    setError("lname");
    isFormValid = false;
  } else {
    setSuccess("lname");
  }


  // 3. Date of Birth - must be filled, age >= 18
  var dob = document.getElementById("dob").value;
  if (dob === "") {
    setError("dob", "Please enter your date of birth.");
    isFormValid = false;
  } else {
    var today     = new Date();
    var birthDate = new Date(dob);
    var age       = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    if (age < 18) {
      setError("dob", "You must be at least 18 years old.");
      isFormValid = false;
    } else {
      setSuccess("dob");
    }
  }


  // 4. Gender - must select an option
  var gender = document.getElementById("gender").value;
  if (gender === "") {
    setError("gender");
    isFormValid = false;
  } else {
    setSuccess("gender");
  }


  // 5. Email ID - standard email format
  var email      = document.getElementById("email").value.trim();
  var emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    setError("email");
    isFormValid = false;
  } else {
    setSuccess("email");
  }


  // 6. Contact Number - 10 digits, starts with 6, 7, 8, or 9
  var phone      = document.getElementById("phone").value.trim();
  var phoneRegex = /^[6-9][0-9]{9}$/;
  if (!phoneRegex.test(phone)) {
    setError("phone");
    isFormValid = false;
  } else {
    setSuccess("phone");
  }


  // 7. Address - minimum 10 characters
  var address = document.getElementById("address").value.trim();
  if (address.length < 10) {
    setError("address");
    isFormValid = false;
  } else {
    setSuccess("address");
  }


  // 8. Pincode - exactly 6 digits, cannot start with 0
  var pincode      = document.getElementById("pincode").value.trim();
  var pincodeRegex = /^[1-9][0-9]{5}$/;
  if (!pincodeRegex.test(pincode)) {
    setError("pincode");
    isFormValid = false;
  } else {
    setSuccess("pincode");
  }


  // 9. State - must select an option
  var state = document.getElementById("state").value;
  if (state === "") {
    setError("state");
    isFormValid = false;
  } else {
    setSuccess("state");
  }


  // 10. PAN Number - format: ABCDE1234F (5 letters + 4 digits + 1 letter)
  var pan      = document.getElementById("pan").value.trim().toUpperCase();
  var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  document.getElementById("pan").value = pan;   // force uppercase in the field
  if (!panRegex.test(pan)) {
    setError("pan");
    isFormValid = false;
  } else {
    setSuccess("pan");
  }


  // 11. Aadhaar Number - exactly 12 digits, must not start with 0 or 1
  var aadhar      = document.getElementById("aadhar").value.trim();
  var aadharRegex = /^[2-9][0-9]{11}$/;
  if (!aadharRegex.test(aadhar)) {
    setError("aadhar");
    isFormValid = false;
  } else {
    setSuccess("aadhar");
  }


  // 12. Education - must select an option
  var edu = document.getElementById("edu").value;
  if (edu === "") {
    setError("edu");
    isFormValid = false;
  } else {
    setSuccess("edu");
  }


  // 13. Occupation - minimum 3 characters
  var occupation = document.getElementById("occupation").value.trim();
  if (occupation.length < 3) {
    setError("occupation");
    isFormValid = false;
  } else {
    setSuccess("occupation");
  }


  // 14. Password - min 8 chars, at least 1 uppercase, at least 1 digit
  var password      = document.getElementById("password").value;
  var passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  if (!passwordRegex.test(password)) {
    setError("password");
    isFormValid = false;
  } else {
    setSuccess("password");
  }


  // 15. Confirm Password - must match password exactly
  var cpassword = document.getElementById("cpassword").value;
  if (cpassword === "" || cpassword !== password) {
    setError("cpassword");
    isFormValid = false;
  } else {
    setSuccess("cpassword");
  }


  // ---- Show result ----
  var successBox = document.getElementById("success-box");

  if (isFormValid) {
    successBox.textContent = "Form submitted successfully! Welcome, " + fname + " " + lname + "!";
    successBox.classList.add("show");
  } else {
    successBox.classList.remove("show");
    // Scroll to the first error field
    var firstError = document.querySelector("input.err, select.err");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

}


// ---- Auto-uppercase PAN field while typing ----
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pan").addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});
