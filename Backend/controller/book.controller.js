import Book from "../modal/book.modal.js"
export const getBook = async(req,res)=>{
    try {
        const book = await Book.find({});
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const getBookByID = async(req,res)=>{
    try {
      const {id} = req.params;
      const book = await Book.findById(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  };

 export const postBook = async(req,res)=>{
    try {
       const books =  await Book.create(req.body);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 };

//  Update data

export const updateBook= async(req,res)=>{
    try {
      // destructured
      const {id} =req.params;
      // updated Product
      const book =  await Book.findByIdAndUpdate(id,req.body);
  
      if (!book) {
        return res.status(404).json({message:"Product not found"});
      }
      
      res.status(200).json(updatedProduct);
  
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  };


//   Delete books 

export const deleteBook = async (req, res) => {
    try {
      const id = req.params.id; // Extract the id correctly
      const book = await Book.findByIdAndDelete(id); // Pass the string id directly
      if (!book) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

 