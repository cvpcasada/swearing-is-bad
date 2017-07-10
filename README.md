# swearing-is-bad

![npm](https://img.shields.io/npm/v/swearing-is-bad.svg) ![license](https://img.shields.io/npm/l/swearing-is-bad.svg) ![github-issues](https://img.shields.io/github/issues/cvpcasada/swearing-is-bad.svg)

Swearing is bad! This will sanitize your string input not to include bad words.

![stars](https://img.shields.io/github/stars/cvpcasada/swearing-is-bad.svg)
![forks](https://img.shields.io/github/forks/cvpcasada/swearing-is-bad.svg)

## Usage
```javascript
import clean from 'swearing-is-bad';

const out = clean(`a string to be sanitized`);

```

## Install

`npm install --save swearing-is-bad`


## Scripts

 - **npm run build** : `bili --format cjs --format es --js babel --flow --browser`
 - **npm run watch** : `bili -w --format cjs --format es --js babel --flow --browser`
 - **npm run test** : `jest`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[cuss](https://www.npmjs.com/package/cuss) | ^1.5.0 | ✖
[f-ck](https://www.npmjs.com/package/f-ck) | ^1.0.2 | ✖
[ramda](https://www.npmjs.com/package/ramda) | ^0.24.1 | ✖
[babel-plugin-external-helpers](https://www.npmjs.com/package/babel-plugin-external-helpers) | ^6.22.0 | ✔
[babel-plugin-preval](https://www.npmjs.com/package/babel-plugin-preval) | ^1.3.0 | ✔
[babel-plugin-ramda](https://www.npmjs.com/package/babel-plugin-ramda) | ^1.2.0 | ✔
[babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties) | ^6.24.1 | ✔
[babel-plugin-transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread) | ^6.23.0 | ✔
[babel-preset-env](https://www.npmjs.com/package/babel-preset-env) | ^1.6.0 | ✔
[bili](https://www.npmjs.com/package/bili) | ^0.17.2 | ✔
[jest](https://www.npmjs.com/package/jest) | ^20.0.4 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[rollup-plugin-babel](https://www.npmjs.com/package/rollup-plugin-babel) | ^2.7.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Cyrus Venn Casada

## License

 - **MIT** : http://opensource.org/licenses/MIT
