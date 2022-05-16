import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  name : {
      type : String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  product:{type: Schema.Types.ObjectId, ref: 'Product'}
});

const User = mongoose.model('User', schema);
export default User;