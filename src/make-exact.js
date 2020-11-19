let findDependency = require('find-dependency')

let isExactRE = /(^|@)[0-9]/
let nonExactRE = /(^|@)[~^].+/
let isLocalRE = /^(link|file):/

function makeExact(pkg, cwd = process.cwd()) {
  let changed = false
  let makeExact = dependencies =>
    dependencies &&
    Object.entries(dependencies).forEach(([name, allowedVersion]) => {
      if (!isExactRE.test(allowedVersion) && !isLocalRE.test(allowedVersion)) {
        let installedRoot = findDependency(name, cwd)
        let installedVersion = require(installedRoot + '/package.json').version
        if (installedVersion) {
          changed = true
          dependencies[name] = allowedVersion.replace(
            nonExactRE,
            '$1' + installedVersion
          )
        }
      }
    })

  makeExact(pkg.dependencies)
  makeExact(pkg.devDependencies)
  return changed
}

module.exports = makeExact
