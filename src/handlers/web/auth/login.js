var main = require("../../../endpoints/auth/login")
var wrap = require("../wrap")

module.exports = async function () {
    await wrap(main(
        this.request.body.requestToken,
        this.request.body.screenName,
        this.request.body.password
    ),this)
}