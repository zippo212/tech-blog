import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 120; // revalidate every 2 minutes

export async function generateStaticParams() {
    const query = groq`*[_type=='post']
    {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }));
}

const Post = async ({params: {slug} }: Props) => {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

    const post: Post = await client.fetch(query, {slug})
  return (
    <article className="px-4 md:px-10">
        <section className="space-y-2 text-white drop-shadow-lg">
            <div className="relative flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    <Image
                        className="object-cover object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>
                <section className="p-5 bg-[#52ab98] w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">
                                {post.title}
                            </h1>
                            <p>
                                {new Date(post.publishedAt).toLocaleDateString("en-US",{
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                        <div className="flex items-start space-x-2 w-64">
                            <Image
                            className="rounded-full mt-1"
                            src={urlFor(post.author.image).url()}
                            alt={post.author.name}
                            height={42}
                            width={42}
                            />
                            <div className="w-full">
                                <h3 className="text-lg font-bold">{post.author.name}</h3>
                                <div>
                                    <p className="text-xs line-clamp-2">{post.author.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="italic font-medium pt-10">{post.description}</h2>
                        <div className="flex items-center justify-end mt-auto space-x-2">
                            {post?.categories?.map((category)=> (
                                <p key={category._id}
                                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                    {category.title}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <div className="bg-[#f2f2f2] pb-10 dark:bg-[#444654] dark:text-white drop-shadow-lg">
            <section className='max-w-3xl mx-auto p-5'>
                <PortableText value={post.body} components={RichTextComponents}/>
            </section>
        </div>
    </article>
  )
}

export default Post