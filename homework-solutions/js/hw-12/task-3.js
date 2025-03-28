// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей.
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах.
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий.
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId).
//       Пример:
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell
//           email: Shanna@melissa.tv
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

const url = 'https://jsonplaceholder.typicode.com';

async function fetchAllUsers() {
  try {
    const response = await fetch(`${url}/users`);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    //console.log('users data', data);
    return data;
  } catch (e) {
    console.error(e.message);
  }
}

async function fetchAllAlbum() {
  try {
    const response = await fetch(`${url}/albums`);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    //console.log('photo data', data);
    return data;
  } catch (e) {
    console.error(e.message);
  }
}

async function fetchAllPhoto() {
  try {
    const response = await fetch(`${url}/photos`);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}

async function fetchData() {
  const [users, albums, photos] = await Promise.all([fetchAllUsers(), fetchAllAlbum(), fetchAllPhoto()]);

  const userData = users.map((user) => {
    const albomUser = albums.filter((albom) => albom.userId === user.id);
    //console.log("albom", albomUser)

    const albumsPhoto = albomUser.map((albom) => {
      const photo = photos.filter((photo) => photo.albumId === albom.id);
      //  console.log("photo_filter", photo);
      return `${albom.title} (${photo.length} photos)`;
    });

    return {
      name: user.name,
      email: user.email,
      phone: user.phone,
      company: user.company.name,
      albums: albumsPhoto,
    };
  });
  // console.log(userData);
  return userData;
}

fetchData()
  .then((res) => console.log(res))
  .catch((reject) => console.log(reject));
