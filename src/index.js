import R from 'ramda';
import { grawlix, inner, vowel } from 'f-ck';
import wordsRegexList from './worddb';

/**
 * Returns function that accepts a string and outputs a sanitized result.
 * @param {*} blacklist : Array<String>
 * @param {*} replacerFn : String -> String
 */
function clean(blacklist, replacerFn) {
    blacklist = wordsRegexList.concat(blacklist);

    return result => {
        return blacklist.reduce(
            (acc, word) =>
                acc.replace(
                    new RegExp(R.propOr(word, 'source', word), 'gi'),
                    val => replacerFn(val)
                ),
            result
        );
    };
}

/**
 * Create a configurable cleaner 
 */
const createCleaner = R.curry(function() {
    if (typeof arguments[0] === 'function') {
        return R.flip(clean)(...arguments);
    } else {
        return clean(...arguments);
    }
});

const defaultCleaner = createCleaner([], grawlix);

export { grawlix, inner, vowel, createCleaner };

export default str => defaultCleaner(str);  