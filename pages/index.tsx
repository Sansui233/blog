import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { NavDropper } from '../components/NavDropper'
import { getAllCategories, getSortedPostsMeta } from '../lib/posts'
import { bottomFadeIn } from '../styles/animations'
import { cardBoxShadow } from '../styles/styles'

type PostType = {
  id: string,
  date: string,
  title?: string,
  categories?: string,
  tags?: string | string[],
}

type Props = {
  posts: PostType[],
  categories: [string, number][]
}


export const CommonHeader = () => (
  <React.Fragment>
    <meta name="description" content="A personal blog about work and life" />
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </React.Fragment>
)

const Home: NextPage<Props> = ({ posts, categories }: Props) => {
  const [currCategory, setCurrCategory] = useState(0)

  const filteredPosts = useMemo<PostType[]>(() => {
    if (currCategory === 0) {
      return posts
    } else {
      return posts.filter(p => {
        return p.categories === categories[currCategory][0]
      })
    }
  }, [currCategory, posts, categories])

  // const transition = useTransition(filteredPosts, {
  //   trail: 100,
  //   from: { opacity: 0, y:'10px' }, 
  //   enter: { opacity: 1, y:'0px' }
  // })

  return (
    <div>
      <Head>
        <title>Sansui - Blog</title>
        <CommonHeader />
      </Head>
      <Layout>
        <MainLayoutStyle>
          <NavDropper items={categories} current={currCategory} setCurrent={setCurrCategory} />
          <PostGrids>
            {filteredPosts.map((post, i) => {
              return (<ArticleItem key={post.id} p={post} i={i}/>)
            })}
            {/* {transition((style, p, _, i) => {
              return <ArticleItem p={p} springStyle={style} key={p.id} index={i}/>
            })} */}
          </PostGrids>
        </MainLayoutStyle>
      </Layout>
    </div>
  )
}

function ArticleItem({p, i}:{
  p: PostType,
  i: number
}){
  return (
      <Link href={'/posts/' + p.id} passHref={true}>
        <Card style={{animationDelay: (i * 100).toString() + 'ms'}}>
          <div className='card-content'>
            <Title>{p.title}</Title>
            <div className='meta'>
              <span className='date'>{p.date}</span>
              <span>{` | `}</span>
              {p.categories}
            </div>
          </div>
        </Card>
      </Link>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getSortedPostsMeta(),
      categories: Array.from(getAllCategories())
    }
  }
}

export default Home

export const MainLayoutStyle = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 0 48px 48px 48px;

  @media screen and (max-width: 780px) {
    max-width: 580px;
  }

  @media screen and (max-width: 580px) {
    padding: 0 20px 48px 20px;
  }
`

export const PageDescription = styled.div`
  margin-top: 2rem;
  font-style: italic;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textGray};
  text-align: right;
`

const PostGrids = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(1, 100%);
  }
`

const Card = styled.a`
  display: block;
  min-height: 7rem;
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s;
  opacity: 0;
  animation: ${bottomFadeIn} .5s ease;
  animation-fill-mode: forwards;
  @media (any-hover: hover) {
    &:hover{
      ${() => cardBoxShadow}
    }
  }

  @media (any-hover: none) {
    &:active{
      ${() => cardBoxShadow}
    }
  }

  .card-content {
    padding: 1rem;
  }

  .meta {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }

  .date {
    font-size: 0.9rem;
    font-family: Dosis;
  }
`

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`

