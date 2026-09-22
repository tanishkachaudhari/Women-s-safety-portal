const reportForm = document.getElementById("reportForm");
const formMessage = document.getElementById("formMessage");

reportForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const issue = document.getElementById("issue").value;
  const description = document.getElementById("description").value.trim();

  if (name === "" || email === "" || issue === "" || description === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please complete every field.";
    return;
  }

  if (!email.includes("@")) {
    formMessage.style.color = "red";
    formMessage.textContent = "Enter a valid email address.";
    return;
  }

  formMessage.style.color = "green";
  formMessage.textContent =
    "Demo report submitted successfully. No information has been stored.";

  reportForm.reset();
});
