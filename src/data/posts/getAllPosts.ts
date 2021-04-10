import { PostData } from '../../@types/posts';
import { POSTS_URL } from '../../config/appConfig';
import fetchJson from '../../utils/fetchJson';

const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?&${query}`;
  const posts = await fetchJson<PostData[]>(url);
  return posts;
};

export default getAllPosts;
