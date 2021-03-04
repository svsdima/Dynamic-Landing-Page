document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const time = document.getElementById('time'),
          date = document.getElementById('date'),
          week = document.getElementById('week'),
          greeting = document.getElementById('greeting'),
          name = document.getElementById('name'),
          focus = document.getElementById('focus');

    //  Show Time
    function showTime() {
        let today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth(),
            day = today.getDate(),
            hour = today.getHours(),
            min = today.getMinutes(),
            seconds = today.getSeconds(),
            dayWeek;

        switch(month){
            case 0: month="Января";   break;
            case 1: month="Февраля";  break;
            case 2: month="Марта";     break;
            case 3: month="Апреля";   break;
            case 4: month="Мая";      break;
            case 5: month="Июня";     break;
            case 6: month="Июля";     break;
            case 7: month="Августа";   break;
            case 8: month="Сентября"; break;
            case 9:month="Октября";  break;
            case 10:month="Ноября";   break;
            case 11:month="Декабря";  break;
        }

        switch(day){
            case 0: dayWeek="Воскресенье";     break;
            case 1: dayWeek="Понедельник";   break;
            case 2: dayWeek="Вторник";  break;
            case 3: dayWeek="Среда";     break;
            case 4: dayWeek="Четверг";   break;
            case 5: dayWeek="Пятница";      break;
            case 6: dayWeek="Суббота";     break;
        }
            


        //  Output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)}`; 
        date.innerHTML = `${addZero(day)}<span> </span>${month}<span> </span>${year}`; 
        week.innerHTML = `${dayWeek}`;

        setTimeout(showTime, 1000);
    }

    // Add Zeros
    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    //  Set Background and Greeting
    function setBgGreet() {
        // let today = new Date(2021, 4, 10, 19, 12, 17),
        let today = new Date(),
            hour = today.getHours();

        if (hour <= 5) {
            // Night
            document.body.style.backgroundImage = "url('../assets/img/night.jpg')";
            greeting.textContent = 'Доброй Ночи';
            document.body.style.color = '#fff';
            document.body.style.textShadow = '1px 1px 1px #000';
        }else if (hour <= 11) {
            // Morning
            document.body.style.backgroundImage = "url('./assets/img/morning.jpg')";
            greeting.textContent = 'Доброе Утро';
        } else if (hour <= 17) {
            // Afternoon
            document.body.style.backgroundImage = "url('./assets/img/afternoon.jpg')";
            greeting.textContent = 'Добрый День';
        } else if (hour <= 20) {
            //  Evening
            document.body.style.backgroundImage = "url('./assets/img/evening.jpg')";
            greeting.textContent = 'Добрый Вечер';
            document.body.style.color = '#fff';
            document.body.style.textShadow = '1px 1px 1px #000';
        } else if (hour <= 23) {
            // Night
            document.body.style.backgroundImage = "url('./assets/img/night.jpg')";
            greeting.textContent = 'Доброй Ночи';
            document.body.style.color = '#fff';
            document.body.style.textShadow = '1px 1px 1px #000';
        }
    }

    // Get Name
    function getName() {
        if (localStorage.getItem('name') === null) {
            name.textContent = 'Дмитрий';
        } else {
            name.textContent = localStorage.getItem('name');
        }
    }

    // Set Name
    function setName(e) {
        if (e.type === "keypress") {
            // Make sure enter is pressed
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }

    // Get Focus
    function getFocus() {
        if (localStorage.getItem('focus') === null) {
            focus.textContent = '[Введите план]';
        } else {
            focus.textContent = localStorage.getItem('focus');
        }
    }

    // Set Focus
    function setFocus(e) {
        if (e.type === "keypress") {
            // Make sure enter is pressed
            if (e.which == 13 || e.keyCode == 13) {
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);

    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    // Run
    showTime();
    setBgGreet();
    getName();
    getFocus();
});