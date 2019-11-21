// @flow
import sample from 'lodash/sample';

export function sampleWithout<X>(items: Array<X>, excluding: Array<?X>): X {
  const filtered = items.filter((i) => !excluding.includes(i));
  return sample(filtered.length === 0 ? items : filtered);
}
