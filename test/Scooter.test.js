const Scooter = require('./../src/Scooter');

describe('Scooter class data type', () => {
    const scooter1 = new Scooter('117', 'Queens', true, false);
    test('id should be a string', () => {
        expect(typeof scooter1.id).toBe('string');
    });
    test('origin should be a string', () => {
        expect(typeof scooter1.origin).toBe('string');
    }); 
    test('isCharged should be a boolean', () => {
        expect(typeof scooter1.isCharged).toBe('boolean');
    }); 
    test('isDamaged should be a boolean', () => {
        expect(typeof scooter1.isDamaged).toBe('boolean');
    }); 
});
