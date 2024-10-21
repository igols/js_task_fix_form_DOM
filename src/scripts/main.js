'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(inputName) {
  return inputName.at(0).toUpperCase() + inputName.slice(1);
}

inputs.forEach((item) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', item.id);
  label.textContent = item.getAttribute('name');
  item.setAttribute('placeholder', capitalize(item.getAttribute('name')));
  item.before(label);
});
