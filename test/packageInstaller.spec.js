const chai = require('chai'); 
const expect = chai.expect;
const {PackageInstaller, CreateDictionary, CheckCycles} = require('../src/packageInstaller.js'); 


describe('Package Installer', () => {
  it('should be a function', () => {
    expect(PackageInstaller).to.be.a('function'); 
  });
  it('should return a string with the packages sorted in order to install ', () => {
    let verifyOutput = PackageInstaller(['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:KittenService','Fraudstream: Leetmeme','Ice: ']);
    expect(verifyOutput).to.be.a('string');
  });
  describe('createDictionary', () => {
    it('should be a function', () => {
      expect(CreateDictionary).to.be.a('function'); 
    });
    it('should return an object with packages as properties', () => {
      let result = { KittenService: [],
        Leetmeme: [ 'Cyberportal' ],
        Cyberportal: [ 'Ice' ],
        CamelCaser: [ 'KittenService' ],
        Fraudstream: [ 'Leetmeme' ],
        Ice: [] };
      expect(CreateDictionary(['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:KittenService','Fraudstream: Leetmeme','Ice: '])).to.deep.equal(result); 
    });
  });
  describe('Check cycle', () => {
    it('should be a function', () => {
      expect(CheckCycles).to.be.a('function'); 
    });
    it('should return a string if it not contains a cycle', () => {
      let cycle = CheckCycles({ KittenService: [],
        Leetmeme: [ 'Cyberportal' ],
        Cyberportal: [ 'Ice' ],
        CamelCaser: [ 'KittenService' ],
        Fraudstream: [ 'Leetmeme' ],
        Ice: [] });
      expect(cycle).to.be.a('string'); 
    });
    it('should return an array when there is a cycle', () => {
      let cycle = CheckCycles({ KittenService: [],
        Leetmeme: [ 'Cyberportal' ],
        Cyberportal: [ 'Ice' ],
        CamelCaser: [ 'KittenService' ],
        Fraudstream: [],
        Ice: [ 'Leetmeme' ] });
      expect(cycle).to.be.an('array'); 
    });
  }); 
});