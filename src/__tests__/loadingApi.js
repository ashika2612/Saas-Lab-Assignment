import { fetchProjects } from '../utils/api';

describe('fetchProjects', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });


  it('should return an empty array when fetch fails', async () => {
    global.fetch.mockResolvedValue({
      status: 500,
      json: jest.fn().mockResolvedValue({}),
    });

    const data = await fetchProjects();
  });

  it('should return an empty array when fetch throws an error', async () => {
    global.fetch.mockRejectedValue(new Error('Network error'));

    const data = await fetchProjects();
    expect(data).toEqual([]);
  });
});