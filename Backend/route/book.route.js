import express from "express";
import {getBook,postBook,getBookByID,updateBook,deleteBook} from "../controller/book.controller.js"
// init router from express
const router  = express.Router()

//  now get request 

router.get("/",getBook);
router.get("/:id",getBookByID);
 
 //Put books
 router.post("/",postBook);
//  Update Books
 router.post("/:id",updateBook);

//  Delete books
router.delete("/:id",deleteBook);


 export default router;
