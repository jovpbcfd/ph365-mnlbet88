// import Link from "next/link";
// import Image from "next/image";
import { getBlogBySlug } from "@/lib/get-blog";
import BlogBody from "../_components/blog-body";
import BlogOtherList from "../_components/other-post";
import Promotion from "../_components/promotion-carousel";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);
  const currentPost = blog?.data?.currentPost ?? {};

  return {
    title: currentPost.title || "Blog",
    description: currentPost.description || "",
    robots: {
      index: false, // noindex
      follow: false, // nofollow
    },
    openGraph: {
      title: currentPost.title || "Blog",
      description: currentPost.description || "",
      url: `${process.env.APP_DOMAIN}/blogs/${slug}`,
      images: currentPost.mainImage.asset.url,
    },
    twitter: {
      card: "summary_large_image",
      title: currentPost.title || "Blog",
      description: currentPost.description || "",
      images: currentPost.mainImage.asset.url,
    },
    alternates: {
      cannonical: `${process.env.APP_DOMAIN}/blogs/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const { currentPost, otherBlogs } = blog?.data;

  return (
    <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-12 gap-8">
      <article className="lg:col-span-8 w-full">
        <BlogBody data={currentPost} />
      </article>

      <aside className="lg:col-span-4 w-full space-y-6">
        {/* Optional promo banner */}
        <div className="w-full mt-6">
          {/* You can include an image or promo component here */}
          {/* <img
            src="/path/to/promo.jpg"
            alt="Promo"
            className="w-full rounded-md"
          /> */}
          <Promotion />
        </div>

        <div className="space-y-4">
          <BlogOtherList otherPost={otherBlogs} />
        </div>
      </aside>
    </div>
  );
}
