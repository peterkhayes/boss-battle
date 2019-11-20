// @flow
import sample from 'lodash/sample';

export function sampleWithout<X>(items: Array<X>, exclusing: Array<?X>): X {
  return sample(items.filter((i) => !exclusing.includes(i)));
}
