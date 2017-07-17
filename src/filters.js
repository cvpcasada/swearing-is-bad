import R from 'ramda';
import grawlixFilters from './extractFromGrawlix';


const filters = R.map(
	R.evolve({ regex: serialized => new RegExp(serialized[0], serialized[1]) }),
	grawlixFilters
);

export default R.map(filter => {
	return filter.regex;
}, filters);