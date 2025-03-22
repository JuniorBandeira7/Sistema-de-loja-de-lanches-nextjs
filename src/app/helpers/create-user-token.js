const jwt = require('jsonwebtoken');

const createUserToken = async (user) => {
    const token = jwt.sign(
        {
            name: user.name,
            id: user.id,
            admin: user.admin
        },
        process.env.SECRET
    )
    return token
}

module.exports = createUserToken;