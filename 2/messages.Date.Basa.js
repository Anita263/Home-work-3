// Создайте файл messagesDataBase.js. В нем создайте массив с именем messages, состоящий из объектов такого вида:
// {
//   id: 1,
//   author: 'Халид',
//   text: 'Здравствуй',
//   type: 'входящее',
//   time: '18:29'
// }
// В массиве должно быть минимум 7 таких объектов с разными значениями, но одинаковыми ключами. 
// Получается некая база данных из сообщений. Выведите массив в консоль.
messages =[{ 
id: 1,
author: 'Халид',
text: 'Здравствуй',
type: 'входящее',
time: '14:29',
},
{ 
id: 2,
author: 'Анна',
text: 'Привет',
type: 'исходящее',
time: '18:29',
},
{ 
id: 3,
 author: 'Лена',
text: 'Пока',
type: 'спам',
time: '18:59',
 },
{ 
id: 4,
author: 'Таня',
text: 'Заходи',
type: 'отправленные',
time: '15:47',
},
{ 
id: 5,
author: 'Ольга',
text: 'Досвидания',
type: 'сохраненные',
time: '18:29',
},
{ 
id: 6,
author: 'Вася',
text: 'Добрый день',
type: 'удаленные',
time: '12:45',
},
{ 
id: 7,
 author: 'Маша',
text: 'Добрый вечер',
type: 'черновики',
time: '18:30',
 },
];
console.log(messages);
