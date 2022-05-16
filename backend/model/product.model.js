import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  price:{
    type: String
  },
  quantity: {
    type: String
  },
  file:{
    type: String
  },
  category:{type: Schema.Types.ObjectId, ref: 'Category'}
});

const Product = mongoose.model('Product', schema);
export default Product;