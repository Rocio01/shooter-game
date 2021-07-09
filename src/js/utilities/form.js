const form = () =>{
  const finalForm = document.createElement("form");
  finalForm.className = "final-form";

  const name = document.createElement('label');
  name.textContent = 'Enter your name';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('name', 'name');

  finalForm.appendChild(name);
  finalForm.appendChild(nameInput);
  return finalForm;

} 

export default form;