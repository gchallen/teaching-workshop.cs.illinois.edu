/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
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
          width="100%"
          alt="Illinois Computer Science Summer Teaching Workshop"
          style={{ marginBottom: 16, marginTop: 16 }}
        />
        {children}
      </main>
    </>
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  wrapper: Wrapper,
  OrganizingCommittee,
}
