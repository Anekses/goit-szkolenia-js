// awesome.com

// awesome.com/user/me
// 1. Czy jesteś w ogóle zalogowany?
// 2. Jeśli tak -> Kim jesteś?

// 1. Sprawdź czy jest zalogowany -> my-api.com/token
// Jeżeli nie -> przekieruj na logowanie
// Jeżeli tak -> my-api.com/users?token=token

// const fetchFriends = () => {
//   return fetch('my-api.com/me')
//     .then(response => response.json())
//     .then(token => {
//       return fetch(`my-api/com/user?token=${token}`)
//     })
//     .then(response => response.json())
//     .then(user => {
//       return fetch(`my-api/com/user-friends/${user.id}`)
//     })
//     .then(response => response.json())
// }

// const fetchFriendsAsync = async () => {
//   // const token = await fetch('my-api.com/me').then(response => response.json())
//   // const user = await fetch(`my-api/com/user?token=${token}`).then(response => response.json())
//   // const friends = await fetch(`my-api/com/user-friends/${user.id}`).then(response => response.json())

//   const responseToken = await fetch('my-api.com/me')
//   const token = await responseToken.json()

//   const responseUser = await fetch(`my-api/com/user?token=${token}`)
//   const user = await responseUser.json()

//   const responseFriends = await fetch(`my-api/com/user-friends/${user.id}`)
//   const friends = await responseFriends.json()

//   return friends;
// }

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.log(error))

// fetchFriendsAsync()
//   .then(friends => console.log(friends))
//   .catch(error => console.log(error))

// const url = 'https://jsonplaceholder.typicode.com/users'

// const fetchUsers = async () => {
//   // try {
//     const response = await fetch(url)
//     const users = await response.json()
//   // } catch (e) {
//     // console.log(e)
//   // }
//   // const res1 = await fetch(url).json()
//   // const res2 = await fetch(url, {
//   //   body: JSON.stringify(res1)
//   // })
//   // const res3 = await fetch(url, {
//   //   body: JSON.stringify(res2)
//   // })

//   return users;
// }

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error))


// const url = 'https://jsonplaceholder.typicode.com/users'

// // throw new Error('abba');

// const fetchUsers = async () => {
//   // try {
//     const response = await fetch(url)
//     const users = await response.json()
//     return users;
//   // } catch(e) {
//   //   console.log(e)
//   // }
// }

// const handler = async () => {
//   try {
//     const users = await fetchUsers()
//   } catch(e) {
//     console.log(e);
//   }
// }

// handler();

// // fetchUsers()
// //   .then()
// //   .catch(e => console.log(e))

// const error = 123

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  
  // const firstR = await fetch(`${baseUrl}/1`)
  // const secondR = await fetch(`${baseUrl}/2`)
  // const thirdR = await fetch(`${baseUrl}/3`)

  // const firstU = await firstR.json();
  // const secondU = await secondR.json();
  // const thirdU = await thirdR.json();
  
  // console.log(firstU, secondU, thirdU)

  const userIds = [1, 2, 3]

  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/${userId}`)
    return response.json();
  })

  const users = await Promise.all(arrayOfPromises);
  console.log(users)
}

fetchUsers();