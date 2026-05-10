const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData = { ...formData, ...parsedData };
  
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    return alert('Fill all fields');
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: "", message: "" };
  form.reset();
});