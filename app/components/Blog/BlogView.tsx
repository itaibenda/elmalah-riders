'use client';

import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import { posts } from '@wix/blog';
import { RichContent, RicosViewer } from '@wix/ricos';
import '@wix/ricos/css/all-plugins-viewer.css';

export function BlogView({ post }: { post: posts.Post }) {
  console.log(post);
  return (
    <div className="mx-auto px-14 mt-12">
      {post ? (
        <div
          className="full-w overflow-hidden max-w-7xl mx-auto"
          data-testid={testIds.PRODUCT_DETAILS.CONTAINER}
        >
          <h1>{post.title}</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="box-border flex flex-col basis-1/2">
              <div>
                <WixMediaImage media={post.media!.wixMedia?.image} />
              </div>
            </div>
            <div className="flex flex-col w-full h-full basis-1/2 text-left">
              <RicosViewer
                content={post.richContent as unknown as RichContent}
              />
            </div>
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
