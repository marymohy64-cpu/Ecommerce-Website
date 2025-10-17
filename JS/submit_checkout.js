const scribtURL =
  "https://script.google.com/macros/s/AKfycbwP4k3L0bwHJPQCTfyuy6JsINugrGAwevjiL6_0x78yOfKosAZLc4iypfv7hzIvN9mkLw/exec";
let form = document.getElementById("form_contact");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scribtURL, {
    method: "POST",
    body: new FormData(form),
  })
  .then((Response)=>{
    setTimeout(() => {
      localStorage.removeItem("cart")
        window.location.reload()
    }, 1000);
  })
  .catch((error) => console.error("error!", error.message));
});
