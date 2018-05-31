module.exports = app => {
    const { mongoose } = app
    const { Schema } = mongoose
    const schema = new Schema({
        title: String,
        info: String,
        content: Schema.Types.ObjectId,
        createTime: { type: Date, default: Date.now }
    });
    return mongoose.model('Article', schema);
};