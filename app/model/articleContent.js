module.exports = app => {
    const { mongoose } = app
    const { Schema } = mongoose
    const schema = new Schema({
        content: String
    });
    return mongoose.model('ArticleContent', schema);
};