import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import Refractor from 'react-refractor'


import js from 'refractor/lang/javascript'
import css from 'refractor/lang/css'
import typescript from 'refractor/lang/typescript'
import python from 'refractor/lang/python'
Refractor.registerLanguage(js)
Refractor.registerLanguage(css)
Refractor.registerLanguage(typescript)
Refractor.registerLanguage(python)

export const RichTextComponents = {
    types: {
        image: ({value}: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image 
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            );
        },
        exampleUsage: ({value}: any) => {
            return (
                <Refractor language={value.language} value={value.code}/>
            );
        },
    },
    list: {
        bullet: ({children}: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({children}: any) => (
            <ol className="mt-lg list-decimal ml-10 py-5">{children}</ol>
        ),
    },
    block: {
        normal: ({children}: any) => (
            <p className="my-4 para-text">{children}</p>
        ),
        h1: ({children}: any) => (
            <h1 className="text-5xl pt-10 pb-5 font-bold underline decoration-4 decoration-[#52ab98]">{children}</h1>
        ),
        h2: ({children}: any) => (
            <h2 className="text-4xl pt-10 pb-5 font-bold">{children}</h2>
        ),
        h3: ({children}: any) => (
            <h3 className="text-3xl pt-10 pb-5 font-bold">{children}</h3>
        ),
        h4: ({children}: any) => (
            <h4 className="text-2xl pt-10 pb-5 font-bold">{children}</h4>
        ),
        blockquote: ({children}: any) => (
            <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
                {children}
            </blockquote>
        )
    },
    marks: {
        link: ({children,value}: any) => {
            const rel = !value.href.startsWith("/") 
            ? "noreferrer noopener"
            : undefined;

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#F7AB0A] hover:decoration-black"
                >
                {children}
                </Link>
            )
        }
    },
}