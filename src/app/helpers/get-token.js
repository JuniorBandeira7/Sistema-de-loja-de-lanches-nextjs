const getToken = (req)=>{
    const authHeader = req.headers.get('authorization')
    if(!authHeader){
        return 
    }
    const token = authHeader.split(" ")[1]

    return token
}

module.exports = getToken