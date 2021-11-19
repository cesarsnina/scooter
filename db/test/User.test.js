const {sequelize} =require('../index')
const User = require('../models/User')


describe('User model', () => {
    
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })

    const testUser = await User.create({ fullName: 'Jorge Flores', email: 'go4Jorge@gmail.com', age: 28, cash:100, hasApp: 1 })

    test('can create a user', async () => {
        
        expect(testUser.id).toBe(1)
        expect(testUser.fullName).toBe('Jorge Flores')
        expect(typeof testUser.fullName).toBe('string')
        expect(testUser.email).toBe('go4Jorge@gmail.com')
        expect(typeof testUser.email).toBe('string')
        expect(testUser.age).toBe(28)
        expect(typeof testUser.age).toBe('number')
        expect(testUser.cash).toBe(100)
        expect(typeof testUser.cash).toBe('number')
        expect(testUser.hasApp).toBe(1)
        expect(typeof testUser.hasApp).toBe('number')
    })
})