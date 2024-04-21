import mongoose from 'mongoose';
// const dbURI = "mongodb://127.0.0.1:27017/proparts";
const dbURI = "mongodb+srv://vishakhaverma8085:edusahyogi8085@cluster0.dxjogfm.mongodb.net/Edusahyogi";

mongoose.connect(dbURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection Failed" + err);
  });

export default mongoose;