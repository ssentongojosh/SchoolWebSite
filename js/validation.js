const send = document.getElementById("send");
const ouput = document.getElementById("output");

const emailPattern = /^[A-Za-z0-9._]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
const emailinput = document.getElementById("email");

emailinput.addEventListener("input", handleEmailInput);
function handleEmailInput() {
  const emailValue = emailinput.value;
  if (emailPattern.test(emailValue)) {
    ouput.innerHTML = "Valid Email Address";
    ouput.style.color = "green";
  } else {
    ouput.innerHTML = "Invalid Email Address<br>format: JohnDoe@example.com";
    ouput.style.color = "red";
  }
}

emailinput.addEventListener("blur", function () {
    emailinput.removeEventListener("input", handleEmailInput);
    ouput.innerHTML = "";
});

send.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  } else {
if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    alert("Message sent successfully!");
    return true;
  }
});
