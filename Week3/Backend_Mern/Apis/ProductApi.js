import exp from "express";

export const productapp = exp.Router();

let products = []

productapp.get('/products', (req,res) => {
    res.status(200).json({message : " Your Products ", Products: products })
})
productapp.get('/products/:id',(req,res)=> {
    let ProductId = Number(req.params.id);
    
    let FindOfProd = products.find(product => product.productId === ProductId)
    if(!FindOfProd){
        return res.status(404).json({message : " Product Not Found"});
    }
    return res.status(200).json({message : "Product" , Product : FindOfProd});
})
productapp.get('/products-brand/:brand',(req,res) => {
    let BrandName = req.params.brand
    let FindBrand = products.find(product => product.brand.toLowerCase() === BrandName.toLowerCase());
    if(!FindBrand){
        return res.status(404).json({message : "Product Nit found"});
    }
    return res.status(200).json({message : "Product Found" , Product : FindBrand});
})
productapp.post('/products', (req,res) => {
    let newProduct = req.body

    products.push(newProduct)
    res.status(200).json({message : "Product cerated" ,products
        
    })
})
productapp.put('/products/id', (req,res) => {
    let updatedProduct = req.body
    let ProductIdx = products.findIndex(product => product.productId === updatedProduct.productId);
    if(ProductIdx === -1){
        return res.status(404).json({message : "Product Not Found"})
    }
    let deleteProduct = products.splice(ProductIdx,1,updatedProduct)
    return res.status(200).json({message : "Product Modified"})
})
productapp.delete('/products-delete/:id', (req,res) => {
    let ProductId = Number(req.params.id)
    let FindIndex = products.findIndex(product => product.productId === ProductId)
    if(FindIndex === -1){
        return res.status(404).json({message : "Product Not Found"});
    }
    products.splice(FindIndex,1);
    return res.status(200).json({message : "Product Deleted" , ProductId : ProductId});
})
