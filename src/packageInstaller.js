
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
  if (Array.isArray(verifyCycles)) {
    return `It should not contain cycles: ${verifyCycles.join(', ')}`;
  } else {
    return verifyCycles;
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
  let result; 
  let sortedPackages = [];
  let cycle = false; 

  const verifyCycle = (package, dependencies) => {
    if (visited[package]) {
      return; 
    }
    dependencies.push(package); 
    let dependency = dictionary[package]; 
    for(let j = 0; j < dependency.length; j++) {
      if (dependencies.indexOf(dependency[j]) >= 0) {
        cycle = true; 
        result = dependencies; 
        return cycle;   
      }
      verifyCycle(dependency[j], dependencies);
    }
    visited[package] = true; 
    sortedPackages.push(package); 
  }

  let packages = Object.keys(dictionary); 
  for (let i = 0; i < packages.length; i++) {
    verifyCycle(packages[i],[]);
  }
  if (cycle) {
    return result; 
  } else {
    return sortedPackages.join(', ');
  }
}

module.exports = {
  PackageInstaller, 
  CreateDictionary,
  CheckCycles
}
