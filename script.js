document.querySelectorAll('.custom-select').forEach(select => {
  const selected = select.querySelector('.custom-select__label');
  const options = select.querySelectorAll('.custom-select__option');
  const label = document.querySelector(`label[for="${select.id}"]`);
  const hiddenInput = document.querySelector(`#${select.id}-input`);

  // Клик по label рядом с селектом
  if (label) {
    label.addEventListener('click', (e) => {
      e.preventDefault();
      select.classList.toggle('open');
    });
  }

  // Клик по видимому заголовку селекта
  selected.addEventListener('click', () => {
    select.classList.toggle('open');
  });

  // Выбор опции
  options.forEach(option => {
    option.addEventListener('click', () => {
      if (option.classList.contains('custom-select__option--disabled')) return;

      selected.textContent = option.textContent;
      select.classList.remove('open');

      if (hiddenInput) {
        hiddenInput.value = option.textContent;
      }
    });
  });
});

// Закрытие селектов при клике вне
document.addEventListener('click', (e) => {
  document.querySelectorAll('.custom-select').forEach(select => {
    const label = document.querySelector(`label[for="${select.id}"]`);
    if (!select.contains(e.target) && !(label && label.contains(e.target))) {
      select.classList.remove('open');
    }
  });
});