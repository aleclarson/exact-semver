# @cush/exact-semver

Update your `package.json` to use exact versioning for its `dependencies` and `devDependencies`.

Any dependency whose version starts with a `~` or `^` specifier has its specifier removed and
its version is replaced with the installed version found in `node_modules`.

```sh
yarn add @cush/exact-semver -D
yarn exact-semver
```

**Recommended:** Use [husky] or [lefthook] to run `exact-semver` on pre-commit!

[husky]: https://github.com/typicode/husky
[lefthook]: https://github.com/Arkweid/lefthook
