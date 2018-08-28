const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon'); 
const packageInstaller = require('../src/packageInstaller.js'); 

describe('Package Installer', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should be a function', () => {
    expect(packageInstaller).to.be.a('function'); 
  });
  it('should only accept an array as an argument', () => {
    let verifyParameter = sinon.spy(packageInstaller);
    packageInstaller(['hello', 'hello', 'hello']);
    expect(verifyParameter.args).to.be.an('array');
  }); 
});