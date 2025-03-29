const isTheFieldEmpty = (req, requiredFields = []) => {
    for(let field of requiredFields){
        if (req[field] === "" || !(field in req) || req[field] == undefined){
            return [true, `O campo ${field} é obrigatório`]
        }
    }
    return [false, null]
}

module.exports = isTheFieldEmpty