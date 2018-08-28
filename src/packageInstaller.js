module.exports = (pkgs) => {
  let packages = pkgs; 
  if (!Array.isArray(packages)) {
    console.log('from inside',packages)
    throw 'It should be an array of packages';
  }
  for (let i = 0; i < packages.length; i++) {
    if (typeof packages[i] !== 'string') {
      throw 'Each package should be a string'; 
    }
  }
  return ['jellp']; 
}


