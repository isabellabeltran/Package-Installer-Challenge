
const PackageInstaller = (packagesList) => {  
  let result = []; 
  if (!Array.isArray(packagesList)) {
    throw 'It should be an array of packages';
  }
  for (let i = 0; i < packagesList.length; i++) {
    if (typeof packagesList[i] !== 'string') {
      throw 'Each package should be a string'; 
    }
  }
  const dictionary = CreateDictionary(packagesList); 
  const verifyCycles = CheckCycles(dictionary); 
  if (verifyCycles) {
    return 'It should not contain cycles between packages';
  }
  
}

const CreateDictionary = (packages) => {
  let dictionary = {};
  for (let i = 0; i < packages.length; i++) {
    let packagePair = packages[i].split(':'); 
    let package = packagePair[0].trim(); 
    let dependency = packagePair[1].trim(); 
    if (package.length === 0) {
      throw 'Missing package'; 
    }
    dictionary[package] = [];
    if (dependency.length > 0) {
      dictionary[package].push(dependency); 
    }
  }
  return dictionary;
}

const CheckCycles = (dictionary) => {
  let visited = {}; 
  let result = false; 

  const verifyCycle = (package, dependencies) => {
    if (visited[package]) {
      return; 
    }
    dependencies.push(package); 
    let dependency = dictionary[package]; 
    for(let j = 0; j < dependency.length; j++) {
      if (dependencies.indexOf(dependency[j]) >= 0) {
        result = true; 
        return result;  
      }
      verifyCycle(dependency[j], dependencies);
    }
    visited[package] = true; 
  }

  let packages = Object.keys(dictionary); 
  for (let i = 0; i < packages.length; i++) {
    verifyCycle(packages[i],[]);
  }
  return result; 
}

console.log(PackageInstaller(['KittenService: ','Leetmeme: Cyberportal','Cyberportal: Ice','CamelCaser:KittenService','Fraudstream: Leetmeme','Ice: ']));

module.exports = {
  PackageInstaller, 
  CreateDictionary
}

  /**
   * I => object 
   * O => boolean 
   * Pseudocode 
   * visitedPackages = keep a reference for each package visited []
   * for each package name in the dictionary 
   * Check that the package on visitedPackages is not repeated
   *  if is repeated return true
   *  else push into visitedPackages and check it's dependencies 
   * 
   * 
  */