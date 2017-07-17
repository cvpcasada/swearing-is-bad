// @preval

const R = require(`ramda`);
const { filters } = require(`grawlix/filters`);
const { filters: addtlFilters } = require(`grawlix-racism`);

const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj)
  )
);

const grawlixDatabase = R.compose(
  R.map(R.evolve({ regex: value => [value.source, value.flags] })),
  R.map(R.pick(['word', 'regex', 'priority'])),
  R.reduce((acc, item) => {
    item = R.evolve({
      priority: R.when(() => 'minPriority' in item, R.always(item.minPriority)),
    });

    const dupeIndex = R.findIndex(R.propEq('word', item.word), acc);
    if (dupeIndex === -1) {
      return acc.concat(item);
    } else {
      return R.update(dupeIndex, R.merge(acc[dupeIndex], item), acc);
    }
  }, []),
  R.sortBy(R.prop('word')),
  R.concat(filters),
  R.map(renameKeys({ pattern: 'regex' }))
)(addtlFilters);

module.exports = grawlixDatabase;
