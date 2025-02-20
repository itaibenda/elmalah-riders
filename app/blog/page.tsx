import { getWixClient } from '@app/hooks/useWixClientServer';
import { posts } from '@wix/blog';
import { Blog } from '@app/components/Blog/Blog';

export default async function BlogPage() {
  const wixClient = await getWixClient();
  let items: posts.Post[] = [];
  try {
    items = (await wixClient.posts.queryPosts().limit(20).find()).items;
  } catch (err) {
    console.error(err);
  }
  return <Blog items={items} />;
}
