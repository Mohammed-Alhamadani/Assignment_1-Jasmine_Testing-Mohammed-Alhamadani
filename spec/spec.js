describe('md5Encrypt function', function () {
    it('should return a 32 character hexadecimal', function () {
        const rawInput = 'abcdefg123';
        const encryptedInput = md5Encrypt(rawInput);
        expect(encryptedInput.length).toBe(32);
        expect(encryptedInput).toMatch(/[0-9a-f]/gi);
    });
});

describe('checkLogin function', function () {
    it('should return true for valid input', function () {
        const username = 'mohammed';
        const password = 'abcdefg123';
        expect(checkLogin(username, password)).toBe(true);
    });

    it('should return error message for invalid username', function () {
        const username = 'Invalid Username';
        const password = 'abcdefg123';
        expect(checkLogin(username, password)).toBe('Invalid Username.');
    });

    it('should return error message for invalid password', function () {
        const username = 'mohammed';
        const password = 'pass123';
        expect(checkLogin(username, password)).toBe('Invalid Password.');
    });

    it('should return error for empty username', function () {
        const username = '';
        const password = 'abcdefg123';
        expect(checkLogin(username, password)).toBe('No username entered.');
    });

    it('should return error message for empty password', function () {
        const username = 'mohammed';
        const password = '';
        expect(checkLogin(username, password)).toBe('No password entered.');
    });
});
