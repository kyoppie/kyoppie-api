var main = require("../../../endpoints/users/follow");
var wrap = require("../wrap")

module.exports = function(req,res){
    wrap(main(
        req.token,
        req.body.screenName,
        req.body.id
    ),req,res);
}
