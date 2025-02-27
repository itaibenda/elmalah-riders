import { getWixClient } from '@app/hooks/useWixClientServer';
import { BlogView } from '@app/components/Blog/BlogView';

export default async function StoresCategoryPage({ params }: any) {
  if (!params.slug) {
    return;
  }
  const wixClient = await getWixClient();
  const post = (
    await wixClient.posts.getPostBySlug(params.slug, {
      fieldsets: ['RICH_CONTENT' as any],
    })
  ).post;

  const { metrics } = await wixClient.posts.getPostMetrics(post?._id || '');
  return <BlogView post={post || {}} metrics={metrics || {}} />;
}
