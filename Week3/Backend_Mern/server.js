import express from "express";
import {UserApp} from './Apis/UserApi.js'
import {productapp} from './Apis/ProductApi.js'
const app = express();

app.listen(3001, () => {
  console.log("HTTP server listening on port 3001");
});
//body parsing middleware
app.use(express.json())
// creating middleware 
app.use('/user-api',UserApp)
app.use('/product-api',productapp)