import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { Post } from '@mersocarlin.com/types'

import BlogPostDate from './BlogPostDate'

interface BlogPostCardProps {
  disabled?: boolean
  post: Post
}

const Title = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 20rem;
  font-weight: bold;
  height: 70rem;
  justify-content: center;
  letter-spacing: 0.05em;
  line-height: 22rem;
  margin-bottom: var(--padding-normal);
`

const Main = styled.div`
  background: var(--background-main-level1);
  border-radius: 5px;
  box-shadow: var(--box-shadow-1);
  color: var(--background-text);
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  &[data-disabled='true'] {
    cursor: default;
  }

  &[data-disabled='false'] {
    :hover {
      box-shadow: var(--box-shadow-5);

      ${Title} {
        text-decoration: underline;
      }
    }
  }
`

const BlogPostImage = styled.div`
  img {
    height: auto;
    width: 100%;
  }
`

const BlogContent = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  height: 190rem;
  padding: var(--padding-large);
`

const Excerpt = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  display: flex;
  font-size: 14rem;
  height: 50px;
  line-height: 1.2;
  margin-bottom: var(--padding-large);
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
`

const Footer = styled.div`
  color: var(--gray-600);
  display: flex;
  font-size: 14rem;
  justify-content: space-between;
`

export default function BlogPostCard({ disabled, post }: BlogPostCardProps) {
  const blogContent = (
    <Main data-disabled={Boolean(disabled)}>
      <BlogPostImage>
        <img src={post.coverImageUrl} />
      </BlogPostImage>
      <BlogContent>
        <Title>{post.title}</Title>
        <Excerpt title={post.excerpt}>{post.excerpt}</Excerpt>

        <Footer>
          <div>{post.author.name}</div>
          <div>
            <BlogPostDate post={post} />
          </div>
        </Footer>
      </BlogContent>
    </Main>
  )

  if (disabled) {
    return blogContent
  }

  return (
    <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
      <a>{blogContent}</a>
    </Link>
  )
}
