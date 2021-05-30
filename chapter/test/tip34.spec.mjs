import {partialMergeProgramInformation, zip} from "../chapter07-functions/tip34-partial-applied-function/partial.js";


describe('partial test', () => {
    const program = {
        name: 'Presenting Research',
        room: '415',
        hours: '3 - 6'
    }

    const exhibit = {
        name: 'Emerging Scholarship',
        contact: 'Dyan'
    }

    const right = ['one', 'two', 'three']

    it('should return program', () => {
        expect(partialMergeProgramInformation(program)).toEqual({
                name: 'Presenting Research',
                hours: '3 - 6',
                address: 'Jayhawk Blvd',
                contact: 'Augusto',
                phone: '555-555-5555',
                room: '415'
            }
        );
    });

    it('should return exhibition', () => {
        expect(partialMergeProgramInformation(exhibit)).toEqual({
                hours: '8 a.m. - 8 p.m.',
                address: 'Jayhawk Blvd',
                contact: 'Dyan',
                phone: '555-555-5555',
                name: 'Emerging Scholarship'
            }
        );
    });

    it('should return zip style', () => {
        expect(zip('1','2','3')(...right)).toEqual([
            ['1', 'one'],
            ['2', 'two'],
            ['3', 'three'],
            ]
        );
    });

});
