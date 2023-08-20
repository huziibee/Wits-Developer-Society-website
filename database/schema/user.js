const mongoose =  require('mongoose')


const dbschema = new mongoose.Schema({
    topic: {type: String},
    post: {type: String, unique: true}, // this is the title 
    desc: {type: String, unique: true},
    author: {type: String},
    date: {type: String},
    tag: {type: String},
    imgg: {type: String, unique: true},
})

        // bannerImg: String,


module.exports = mongoose.model( 'blogs',dbschema)