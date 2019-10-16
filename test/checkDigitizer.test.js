import chai from 'chai';
import chaiThings from 'chai-things';
chai.use(chaiThings);
chai.should();
import CheckDigitizer from '../src/checkDigitizer';

describe('CodiceFiscaleUtils:CheckDigitizer', () => {
    describe('ControlCode', () => {
        describe('CheckDigitizer.checkDigit', () => {
            it('Should return DMBNDR05P21F839 for L', () => {
                CheckDigitizer.checkDigit('DMBNDR05P21F839').should.be.equal('L');
            });
            it('Should return VRNGNY07D68C351 for V', () => {
                CheckDigitizer.checkDigit('VRNGNY07D68C351').should.be.equal('V');
            });
        });
    });
});