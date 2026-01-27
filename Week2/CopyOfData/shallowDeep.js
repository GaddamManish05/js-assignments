// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
//                 const order = {
//                   orderId: "ORD1001",
//                   customer: {
//                     name: "Anita",
//                     address: {
//                       city: "Hyderabad",
//                       pincode: 500085
//                     }
//                   },
//                   items: [
//                     { product: "Laptop", price: 70000 }
//                   ]
//                 };

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged

const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
        ]
};

let order1 = structuredClone(order) // creation of deep copt using with structured Clone()

//i) here copied object will create a new object with new references and changes of there properties

order1.customer.address = 'Waranagal'

//ii)price property as been changes

order1.items[0].price = 50000

//iii)

console.log(order)
console.log(order1)

// {
//   orderId: 'ORD1001',
//   customer: { name: 'Anita', address: { city: 'Hyderabad', pincode: 500085 } },
//   items: [ { product: 'Laptop', price: 70000 } ]
// }
// {
//   orderId: 'ORD1001',
//   customer: { name: 'Anita', address: 'Waranagal' },
//   items: [ { product: 'Laptop', price: 50000 } ]
// }

// here in deep copy we can are actually creating a copied obj to a new a obj with new references 
// changes in one object don't effect in other object in deepCopy
