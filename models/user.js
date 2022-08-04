const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    items: [
      {
        productId: { type: Schema.Types.ObjectId, required: true, ref: 'Product' }, 
        quantity: { type: Number, required: true}
      }
    ]
  }
});

userSchema.methods.addToCart = function() {
  
}

module.exports = mongoose.model('User', userSchema);
