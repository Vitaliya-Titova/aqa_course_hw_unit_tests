/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос.
    Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
   */

async function createTodo(todaData) {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(todaData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 201) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();

    function deepEqual(data, todaData) {
      for (let key in todaData) {
        if (todaData[key] !== data[key]) {
          throw new Error('Data is not equal');
        }
      }
    }

    deepEqual(data, todaData);

    console.log('response', data);
    return data;
  } catch (e) {
    console.error(e.message);
  } finally {
    console.log('Function is complete');
  }
}

const body = {
  userId: 1,
  title: 'test title',
  completed: true,
};

createTodo(body);

createTodo(
  (body2 = {
    userId: 2,
    title: 'Come on!',
    completed: false,
  }),
);
