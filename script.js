function validateForm()
// Username validation
var uname = document.getElementById("uname").value; if (uname == "") {
alert("Please enter User Name"); return false;
// Address validation
var address = document.getElementById("address").value; if (address == "") {
alert("Please enter Address"); return false;
}
// Date of Birth validation
var dob = document.getElementById("dob").value; if (dob == "") {
alert("Please select Date of Birth"); return false;
}
// Email validation
var email = document.getElementById("email").value; var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!email.match(emailPattern)) {
alert("Please enter valid Email ID"); return false;
// PAN number validation
var pan = document.getElementById("pan").value; var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
if (!pan.match(panPattern)) {
alert("Please enter valid PAN Number"); return false;
}
// Aadhaar number validation
var aadhar = document.getElementById("aadhar").value; if (aadhar.length != 12 || isNaN(aadhar)) {
alert("Please enter valid 12-digit Aadhaar Number"); return false;
// Education validation
var education = document.getElementById("education").value; if (education == "") {
alert("Please select Education"); return false;
}
// Contact number validation
var contact = document.getElementById("contact").value; if (contact.length != 10 || isNaN(contact)) {
alert("Please enter valid 10-digit Contact Number"); return false;
}
alert("Form Submitted Successfully"); return true;
