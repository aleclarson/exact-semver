let isExactRE = /^[0-9]+\.[0-9]+\.[0-9]+$/
let rangeSpecRE = /(^|@)[~^]/

function makeExact(pkg) {
  let changed = false
  let makeExact = dependencies =>
    dependencies &&
    Object.entries(dependencies).forEach(([name, version]) => {
      if (!isExactRE.test(version)) {
        dependencies[name] = version.replace(rangeSpecRE, '$1')
        changed = true
      }
    })

  makeExact(pkg.dependencies)
  makeExact(pkg.devDependencies)
  return changed
}

module.exports = makeExact
