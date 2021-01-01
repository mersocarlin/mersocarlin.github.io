import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import highlight from 'remark-highlight.js'
import renderToString from 'next-mdx-remote/render-to-string'

import Components from '@mersocarlin.com/components/BlogPost/Components'
import { Post } from '@mersocarlin.com/types'
import {
  getPreviousSlugs,
  getSlugByFileName,
  sortByDateDesc,
} from '@mersocarlin.com/utils/posts'
import calculateTimeToRead from '@mersocarlin.com/utils/timeToRead'

const POSTS_DIRECTORY = join(process.cwd(), 'posts')
const ALL_FILES: string[] = fs.readdirSync(POSTS_DIRECTORY)

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileName = ALL_FILES.find((file) => file.includes(slug)) as string
  const fullPath = join(POSTS_DIRECTORY, `${fileName}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { timeToRead, wordCount } = calculateTimeToRead(content)

  const mdxSource: string = await renderToString(content, {
    components: Components,
    mdxOptions: {
      remarkPlugins: [highlight],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    ...data,
    content: mdxSource,
    previousSlugs: getPreviousSlugs(ALL_FILES, fileName),
    slug,
    timeToRead,
    wordCount,
  } as Post
}

export async function getPosts(): Promise<Post[]> {
  const postsPromises = ALL_FILES.map((fileName) =>
    getPostBySlug(getSlugByFileName(fileName)),
  )

  const posts = await Promise.all(postsPromises)
  return posts.sort(sortByDateDesc)
}
