// @flow

import R from 'ramda';
import { grawlix, inner, vowel } from 'f-ck';
import wordsRegexList from './filters';

/**
 * Returns function that accepts a string and outputs a sanitized result.
 * @param blacklist
 * @param replacerFn
 * @param unsanitizedString
 * @returns {*}
 */
function clean(
  blacklist: Array<string | RegExp>,
  replacerFn: (str: string) => string,
  unsanitizedString: string
): String {
  blacklist = wordsRegexList.concat(blacklist);

  return blacklist.reduce(
    (acc: string, word: string | RegExp): string =>
    {
      return acc.replace(
	      typeof word === 'string' ? new RegExp(word, 'ig') : word,
	      val => replacerFn(val)
      )
    },
    unsanitizedString
  );
}

/**
 * Create a configurable cleaner 
 */
const createCleaner = R.curryN(3, function() {
  if (typeof arguments[0] === 'function') {
    return R.flip(clean)(...arguments);
  } else {
    return clean(...arguments);
  }
});

const defaultCleaner = createCleaner([], grawlix);

export default (str: string) => defaultCleaner(str);

export { grawlix, inner, vowel, createCleaner };
