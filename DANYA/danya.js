const nam = prompt('Как тебя зовут ? (первая буква большая!)');

document.body.innerHTML = `<h1>${nam == 'Даня' ? 'Этот сайт не для геев, очкошник, тебе сюда: <mark>0!0</mark>' : 'Так как ты не гей, спокойно кликай <a href="./NEW_Code/index.html">сюда</a>'}`