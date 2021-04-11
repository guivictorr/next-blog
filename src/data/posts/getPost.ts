import { PostData } from '../../@types/posts';
import { POSTS_URL } from '../../config/appConfig';
import fetchJson from '../../utils/fetchJson';
import markdownToHtml from './markdownToHtml';

const getPost = async (
  id: string | string[] | undefined,
): Promise<PostData> => {
  const idString = Array.isArray(id) ? id[0] : id;
  const url = `${POSTS_URL}?id=${idString}`;
  const jsonPost = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPost[0].content);
  const finalContent = { ...jsonPost[0], content };
  return finalContent;
};

export default getPost;
