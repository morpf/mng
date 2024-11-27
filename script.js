document.addEventListener("DOMContentLoaded", () => {
    // Показать начальный экран
    showScreen("screen1");

    // Задержка перед переходом на экран входа
    setTimeout(() => {
        showScreen("screen2");
    }, 2000);

    // Обработчик формы входа
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        showScreen("screen3"); // Переключаемся на экран мероприятий
    });

});

function openScreen3() {
  showScreen("screen3")
}
function openScreen4() {
  showScreen("screen4")
}
function openScreen6() {
  showScreen("screen6")
}
function openScreen5() {
  showScreen("screen5")
}
function openScreen7() {
  showScreen("screen7")
}
function openScreen8() {
  showScreen("screen8")
}


function toggleDropdownMenu() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function editEvent() {
  alert('Редактирование мероприятия');
  // Реализуйте логику редактирования мероприятия
}

function deleteEvent() {
  if (confirm('Вы уверены, что хотите удалить мероприятие?')) {
      alert('Мероприятие удалено');
      // Реализуйте логику удаления мероприятия
  }
}



// Функция для показа нужного экрана
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("visible"); // Убираем класс visible у всех экранов
        screen.classList.add("hidden"); // Добавляем класс hidden ко всем экранам
    });
    document.getElementById(screenId).classList.remove("hidden"); // Убираем класс hidden у нужного экрана
    document.getElementById(screenId).classList.add("visible"); // Добавляем класс visible к нужному экрану
}

function addNavHandlers() {
    document.querySelectorAll("nav button").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            switch (index) {
                case 0: showScreen("screen3"); break; // Домой
                case 1: showScreen("screen4"); break; // Создать мероприятие
                case 2: showScreen("screen6"); break; // Чат
                case 3: showScreen("screen5"); break; // Профиль
            }
        });
    });
}

// Остальные функции остаются без изменений

function toggleEvents(type) {
    // Получаем элементы
    const plannedPanel = document.querySelector('.content-panel.planned');
    const pastPanel = document.querySelector('.content-panel.past');
    const slider = document.querySelector('.slider');
    const plannedBtn = document.querySelector('.toggle-button.planned-btn');
    const pastBtn = document.querySelector('.toggle-button.past-btn');
  
    // Переключаем отображение панелей и положение ползунка
    if (type === 'planned') {
      plannedPanel.classList.add('active');
      pastPanel.classList.remove('active');
      slider.style.left = '0';
  
      // Добавляем класс active к нужной кнопке
      plannedBtn.classList.add('active');
      pastBtn.classList.remove('active');
    } else {
      plannedPanel.classList.remove('active');
      pastPanel.classList.add('active');
      slider.style.left = '50%';
  
      // Добавляем класс active к нужной кнопке
      plannedBtn.classList.remove('active');
      pastBtn.classList.add('active');
    }
}

function Calendar2(id, year, month) {
  var Dlast = new Date(year, month + 1, 0).getDate(),
      D = new Date(year, month, Dlast),
      DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
      calendar = '<tr>',
      month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  // Начало календаря с пустых ячеек
  if (DNfirst != 0) {
      for (var i = 1; i < DNfirst; i++) calendar += '<td>';
  } else {
      for (var i = 0; i < 6; i++) calendar += '<td>';
  }

  // Текущая дата, завтра и через два дня
  var today = new Date();
  var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  var dayAfterTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);

  // Заполнение дней месяца
  for (var i = 1; i <= Dlast; i++) {
      var currentDate = new Date(D.getFullYear(), D.getMonth(), i);

      if (i == today.getDate() && D.getFullYear() == today.getFullYear() && D.getMonth() == today.getMonth()) {
          calendar += '<td class="today">' + i;
      } else if (i == tomorrow.getDate() && D.getFullYear() == tomorrow.getFullYear() && D.getMonth() == tomorrow.getMonth()) {
          calendar += '<td class="event1">' + i;
      } else if (i == dayAfterTomorrow.getDate() && D.getFullYear() == dayAfterTomorrow.getFullYear() && D.getMonth() == dayAfterTomorrow.getMonth()) {
          calendar += '<td class="event1">' + i;
      } else {
          calendar += '<td>' + i;
      }

      if (currentDate.getDay() == 0) {
          calendar += '<tr>';
      }
  }

  // Добавление пустых ячеек в конце
  for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';

  document.querySelector('#' + id + ' tbody').innerHTML = calendar;
  document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();

  // Убедиться, что всегда 6 строк
  if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
      document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
}

// Инициализация календаря
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

// Переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
};

// Переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
};

