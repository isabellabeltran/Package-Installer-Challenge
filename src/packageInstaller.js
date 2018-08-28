const PackageInstaller = (pkgs) => {
  let packages = pkgs; 
  if (!Array.isArray(packages)) {
    throw 'It should be an array of packages';
  }
  for (let i = 0; i < packages.length; i++) {
    if (packages[i] !== 'string') {
      throw 'Each package should be a string'; 
    }
  }
  
}