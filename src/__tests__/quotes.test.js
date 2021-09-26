import { renderHook } from '@testing-library/react-hooks';
import useQuotes from '../hooks/quotes';

test('useQuotes returns quotes data', () => {
  const data = renderHook(() => useQuotes());
  fetch.mockResponse(JSON.stringify({}));
  expect(data.length).toEqual('Loading');
});
