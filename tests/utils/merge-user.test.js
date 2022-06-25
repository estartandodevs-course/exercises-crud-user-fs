const { mergeUser } = require('../../src/utils/merge-user');

jest.mock('object-mapper', ()=>{
    const originalModule = jest.requireActual('object-mapper');
    return {
        __esModule: true,
        ...originalModule,
        objectMapper: jest.fn(() => "objectMapper"),
    }
})

describe('Merge User', () => {

    it('Should return an error if no user is passed', () => {
        try {
            mergeUser();
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('User is required');
        }
    });

    it('It should return a valid user ', () => {
        const result = mergeUser({
            id: 1,
            name: 'John Doe',
            email: 'john@contato.com',
            password: '12345678',
            phone: '+5511999999999'
        });

        expect(typeof result.id).toBe('number');
        expect(result.status).toBe(true);
    });
})