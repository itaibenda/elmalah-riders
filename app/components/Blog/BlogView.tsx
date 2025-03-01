'use client';

import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { posts } from '@wix/blog';
import { quickStartViewerPlugins, RichContent, RicosViewer } from '@wix/ricos';
import { useWixClient } from '@app/hooks/useWixClient';
import '@wix/ricos/css/all-plugins-viewer.css';
import { useState } from 'react';

export function BlogView({
  post,
  metrics,
}: {
  post: posts.Post;
  metrics: posts.Metrics;
}) {
  const { auth, posts } = useWixClient();
  const [likes, setLikes] = useState(metrics.likes);

  const likePost = () => {
    // oops can't mutate the likes!
  };
  return (
    <div className="max-w-4xl mx-auto px-8 sm:px-14 pt-4 sm:pt-16">
      {post ? (
        <div
          className="full-w overflow-hidden"
          data-testid={testIds.PRODUCT_DETAILS.CONTAINER}
        >
          <h1 className="text-3xl leading-none">{post.title}</h1>
          <div className="">
            <div className="box-border flex flex-col py-6">
              <div>
                <WixMediaImage media={post.media!.wixMedia?.image} />
              </div>
            </div>
            <div className="flex flex-col w-full h-full text-left">
              <RicosViewer
                content={post.richContent as unknown as RichContent}
                plugins={quickStartViewerPlugins()}
              />
            </div>
            <div>Likes: {likes}</div>
            {auth.loggedIn() ? (
              <button onClick={() => likePost()}>Like</button>
            ) : (
              <div>Login to like</div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-3xl w-full text-center p-9 box-border max-w-4xl mx-auto">
          Blog Post Not Found
        </div>
      )}
    </div>
  );
}
