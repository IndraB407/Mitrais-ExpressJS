module.exports = function (){
    return function (req, res, next){
        console.log('Request URL    :', req.originalUrl)
        console.log('Request Type   : ', req.method);
        console.log('Request Time   : ', Date.now());
        next()
    }
}