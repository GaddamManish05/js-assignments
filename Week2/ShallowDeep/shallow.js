// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t

const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

const user2 = {...user}

// shallow copy will also ref to present obj

// i )

user2.name = "Ravan"

// ii)

user2.preferences.theme = "light"

// iii) changes are done by both objects

console.log(user)
console.log(user2)

// iv)

// {
//   id: 101,
//   name: 'Ravi',
//   preferences: { theme: 'light', language: 'en' }
// }
// {
//   id: 101,
//   name: 'Raavan',
//   preferences: { theme: 'light', language: 'en' }
// }