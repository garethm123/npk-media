import Link from 'next/link'
import style from './latest.module.scss'
import {FC} from 'react'


interface FirstBlogProps {
  firstBlog: {
    slug: string,
    content: any,
    name: string
  },
}

const FirstBlog:FC<FirstBlogProps> = ({ firstBlog }) => {
  return (
    <section className={style.blogMain}>
      <Link href={`/blog/${firstBlog.slug}`}>
        <a>
          <section className={style.hero}
            style={{
              backgroundImage: `url(${firstBlog.content.image.filename})`,
              backgroundSize: 'cover'
            }}
          >
            <div className={style.latestBlog}>
              <p>{firstBlog.content.tags}</p>
              <h1>{firstBlog.name}</h1> 
            </div>
          </section>
        </a>
      </Link>
    </section>
  )
}
export default FirstBlog