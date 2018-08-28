const chai = require('chai'); 
const expect = chai.expect;
const sinon = require('sinon'); 
const {PackageInstaller, CreateDictionary} = require('../src/packageInstaller.js'); 


describe('Package Installer', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should be a function', () => {
    expect(PackageInstaller).to.be.a('function'); 
  });
  it('should only accept an array as an argument', () => {
    let verifyParameter = sinon.spy(PackageInstaller);
    PackageInstaller([]);
    expect(verifyParameter.args).to.be.an('array');
  }); 
  describe('createDictionary', () => {
    it('should be a function', () => {
      expect(CreateDictionary).to.be.a('function'); 
    });
    it('should return an object', () => {
      let result = { KittenService: [],
        Leetmeme: [ 'Cyberportal' ],
        Cyberportal: [ 'Ice' ],
        CamelCaser: [ 'KittenService' ],
        Fraudstream: [ 'Leetmeme' ],
        Ice: [] };
      expect(CreateDictionary(['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:KittenService','Fraudstream: Leetmeme','Ice: '])).to.deep.equal(result); 
    });
  });
});