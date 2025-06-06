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


document.querySelectorAll('.offer__card').forEach(card => {
    card.addEventListener('click', () => {
      // Если уже активна, отключаем
      if (card.classList.contains('active')) {
        card.classList.remove('active');
      } else {
        // Удаляем активность с других карточек (если нужно)
        document.querySelectorAll('.offer__card.active').forEach(activeCard => {
          activeCard.classList.remove('active');
        });
        // Активируем текущую
        card.classList.add('active');
        // Скроллим карточку к верху (необязательно)
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
  
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.burger__open');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');       // превращаем в крестик
    menu.classList.toggle('active');         // показываем/скрываем меню
  });



    const modal = document.getElementById('videoModal');
  const openBtn = document.querySelector('.open-modal-btn');
  const closeBtn = document.querySelector('.close-modal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    // Если хочешь остановить видео при закрытии:
    const iframe = modal.querySelector('iframe');
    iframe.src = iframe.src;
  });

  // Закрытие по клику вне окна
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      const iframe = modal.querySelector('iframe');
      iframe.src = iframe.src;
    }
  });