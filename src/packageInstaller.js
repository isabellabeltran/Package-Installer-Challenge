
const PackageInstaller = (packagesList) => {  
  if (!Array.isArray(packagesList)) {
    throw 'It should be an array of packages';
  }
  for (let i = 0; i < packagesList.length; i++) {
    if (typeof packagesList[i] !== 'string') {
      throw 'Each package should be a string'; 
    }
  }
  CreateDictionary(packagesList); 
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

module.exports = {
  PackageInstaller, 
  CreateDictionary
}