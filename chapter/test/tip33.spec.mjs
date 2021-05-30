import {comic, getName, getFullName, discounter, tenPercentOff} from "../chapter07-functions/tip33-arrow/arrow.js";

describe('arrow test', () => {

    it('should return first last member', () => {
        expect(getName(comic)).toEqual('Peter Bagge');
    });

    it('should return full name', () => {
        expect(getFullName(comic)).toEqual({ fullName: 'Peter Bagge'});
    });

    it('should return 90', () => {
        expect(tenPercentOff(100)).toEqual(90);
    });

    it('should return 90', () => {
        expect(discounter(0.1)(100)).toEqual(90);
    });
});
