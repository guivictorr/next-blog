import remark from 'remark';
import remarkHtml from 'remark-html';

const markdownToHtml = async (content: string) => {
  const data = await remark().use(remarkHtml).process(content);
  return String(data.contents);
};

export default markdownToHtml;
