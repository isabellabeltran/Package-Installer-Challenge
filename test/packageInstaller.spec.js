const chai = require('chai'); 
const expect = chai.expect;
const packageInstaller = require('../src/packageInstaller.js'); 

describe('Package Installer', () => {
  it('should be a function', () => {
    expect(packageInstaller).to.be.a('function'); 
  });

});