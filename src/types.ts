export type PageProps = {
  appVersion: string
  gaId: string
}

export type Author = {
  name: string
  imageUrl: string
}

export type PostImage = {
  height: number
  url: string
  width: number
}

export type MdxSource<MdxScopeType> = {
  compiledSources: string
  renderedOutput: string
  scope: MdxScopeType
}

export type PostMdxScope = {
  coverImage?: PostImage
  date?: string
  excerpt: string
  title: string
}

export type Post = {
  author: Author
  content: MdxSource<PostMdxScope>
  coverImage: PostImage
  date: string
  excerpt?: string
  ogImage: PostImage
  path: string
  previousSlugs?: string[]
  slug: string
  timeToRead: string
  title: string
  wordCount: number
}

/** Twitter types  */
export type TweetAuthor = {
  name: string
  profileImageUrl: string
  username: string
  verified: boolean
}

export type TweetImage = {
  height: number
  url: string
  width: number
}

export type TweetEntity = {
  end: number
  start: number
} & (
  | {
      description: string
      images: TweetImage[]
      title: string
      type: 'url'
      url: string
    }
  | {
      type: 'mention'
      username: string
    }
)

export type Tweet = {
  author: TweetAuthor
  createdAt: string
  entities: TweetEntity[]
  id: string
  likes: number
  retweets: number
  text: string
}
