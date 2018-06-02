module.exports = app => {
    const { mongoose } = app
    const { Schema } = mongoose
    const schema = new Schema({
        username: String,
        password: String
    });
    return mongoose.model('User', schema);
};