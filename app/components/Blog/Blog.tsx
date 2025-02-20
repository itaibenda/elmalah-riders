import { posts } from '@wix/blog';
import testIds from '@app/utils/test-ids';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';

export function Blog({ items }: { items: posts.Post[] }) {
  return (
    <div className="mx-auto">
      <div
        className="bg-black text-custom-1 text-center py-4 sm:py-10 sm:py-20 h-[450px] sm:h-[520px]"
        data-testid={testIds.SHOP_PAGE.HEADER}
      >
        <h1 className="uppercase text-3xl sm:text-6xl">Blog</h1>
        <p className="text-sm sm:text-base mx-auto px-8 sm:max-w-[50%] my-10">
          Discover the beauty of Israel’s South District from the saddle of your
          bike. Whether you’re an adrenaline-seeking mountain biker or a casual
          cyclist looking for scenic desert roads, this blog is your ultimate
          guide to riding through the vast Negev landscapes, breathtaking
          craters, and ancient historical sites. From hidden trails in the Ramon
          Crater to the winding roads of Eilat’s mountains, we share route
          recommendations, safety tips, and the best times to ride. Expect
          firsthand experiences, local insights, and everything you need to plan
          the perfect cycling adventure in Israel’s southern wilderness. Get
          ready to pedal through the desert and embrace the freedom of cycling
          in one of the most stunning regions of the country! 🚴‍♂️🌵🔥
        </p>
      </div>
      <div
        className="full-w overflow-hidden mx-auto text-center mt-[-30px] sm:mt-[-30px] px-10"
        data-testid={testIds.PRODUCT_LIST.CONTAINER}
      >
        <ul className="grid sm:grid-cols-3 gap-8 grid-flow-row">
          {items.map((item) => (
            <li
              key={item._id}
              className="relative"
              data-testid={testIds.PRODUCT_ITEM.CONTAINER}
            >
              <a
                href={`/product-page/${item.slug}`}
                data-testid={testIds.PRODUCT_ITEM.PRODUCT_DETAILS_CTA}
              >
                <div className="h-auto max-w-full">
                  <WixMediaImage
                    media={item.media?.wixMedia?.image}
                    height={560}
                    width={560}
                    alt={item.media?.altText || 'main image'}
                  />
                </div>
                <div className="p-2 text-left">
                  <span>{item.title}</span>
                  <br />
                  <span className="text-xs">{item.content}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
