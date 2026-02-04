//  Product catalog
// Product database (simulated)
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// TODO: Implement these functions

function getProductById(id) {
  // Find and return product by ID
    return products.find(product => product.id === id)
}

function getAllProducts() {
  // Return all products
    return products
}

function getProductsByCategory(category) {
  // Filter products by category
    let RequiredProduct = []
    products.forEach(product => {
        if(product.category === category){
            RequiredProduct.push(product)
        }
    })
    return RequiredProduct
}
function searchProducts(query) {
// Search products by name (case-insensitive)
    return products.find(product => product.name.toLowerCase() === query.toLowerCase())
}
function checkStock(productId, quantity) {
// Check if product has enough stock
// Return true/false
    let ProductStock = products.find(product => product.id === productId)
    return ProductStock ? ProductStock.stock >= quantity : true;
}
function reduceStock(productId, quantity) {   // Reduce product stock after purchase
    let ProductReduce = products.find(product => product.id === productId)
    if(!ProductReduce) return false
    if(ProductReduce.stock < quantity) return false

    ProductReduce.stock -= quantity
    return true
    
}

export { getProductById, getAllProducts, getProductsByCategory, searchProducts, checkStock, reduceStock }