module.exports = app => {
    const mongoose = app.mongoose;
    const articleSchema = new mongoose.Schema({
        title: String,
        content: String,
        createTime: { type: Date, default: Date.now }
    });
    return mongoose.model('Article', articleSchema);
};