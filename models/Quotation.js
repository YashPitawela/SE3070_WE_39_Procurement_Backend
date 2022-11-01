import mongoose from 'mongoose';



const quotationSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
   
    companyAddress: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Quotation = mongoose.model('Quotation', quotationSchema);

export default Quotation;
