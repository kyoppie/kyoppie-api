module.exports = function(mongoose) {
    var schema = new mongoose.Schema({
        ipaddr:String,
        path:String,
        response:String
    },{
        timestamps:true
    })
    schema.methods.toResponseObject = async function (token) {
        var obj = this.toObject()
        obj.id = this._id
        obj._id = undefined
        obj.__v = undefined
        return obj
    }
    return mongoose.model("logs",schema)
}