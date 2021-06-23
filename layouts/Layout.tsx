/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import LazyLoad from "react-lazyload"
import OrganizingCommittee from "../components/OrganizingCommittee"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const Wrapper: React.FC<{ frontmatter: { title: string; description: string } }> = ({ frontmatter, children }) => {
  const { title, description } = frontmatter
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="ogtitle" />
        {description && (
          <>
            <meta name="description" content={description.trim()} />
            <meta property="og:description" content={description.trim()} key="ogdesc" />
          </>
        )}
      </Head>
      <main className="responsive paddings">
        <img
          src={`${basePath}/logo.png`}
          alt="Illinois Computer Science Summer Teaching Workshop: How the Pandemic Transformed Our Teaching, August 10 and 11, 2021"
          style={{
            marginBottom: 16,
            marginTop: 16,
            width: "calc(min(822px, 100vw - 16px))",
            height: "calc(0.275 * min(822px, 100vw - 16px))",
          }}
        />
        {children}
      </main>
    </>
  )
}

const Image: React.FC<{ src: string }> = ({ src, ...props }) => {
  const actualSource = src.startsWith("/") ? `${basePath}${src}` : src
  return (
    <LazyLoad>
      <img src={actualSource} {...props} />
    </LazyLoad>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  wrapper: Wrapper,
  OrganizingCommittee,
  Image,
}
