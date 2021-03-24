import { PostData } from '../../@types/posts';
import { POSTS_URL } from '../../config/appConfig';
import fetchJson from '../../utils/fetchJson';

const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostData[]>(POSTS_URL);
  return posts;
};

export default getAllPosts;
