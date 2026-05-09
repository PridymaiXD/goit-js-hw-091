const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    return alert('Please fill in all fields');
  }

  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});