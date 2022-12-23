import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  } | order(publishedAt desc) 
`
export const revalidate = 120; // revalidate every 2 minutes

const HomePage = async () => {
  if(previewData()) {
    return (
      <PreviewSuspense fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse text-[#52ab98]">
            Loading Preview Data...
          </p>
        </div>
    }>
        <PreviewBlogList query={query}/>
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
      <BlogList posts={posts}/>
  );
};

export default HomePage