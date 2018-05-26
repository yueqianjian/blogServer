module.exports = app => {
    const mongoose = app.mongoose;
    const articleSchema = new mongoose.Schema({
        title: String,
        content: String
    });
    return mongoose.model('Article', articleSchema);
};