import { POSTS_URL } from '../../config/appConfig';
import fetchJson from '../../utils/fetchJson';

const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<string>(url);

  return numberOfPosts;
};

export default countAllPosts;
