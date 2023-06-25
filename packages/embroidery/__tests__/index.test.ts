import embroidery from '../src';
import { defaultEmbroidery } from './specs';

describe('@--> embroidery', () => {
  it('Returns default values', () => {
    const results = embroidery();
    expect(results).toEqual(defaultEmbroidery);
  });
});
