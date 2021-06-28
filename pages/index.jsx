import components from "../layouts/Layout"
import Content from "../output/2021"
import frontmatter from "../output/2021.json"

export default function Page() {
  return <Content components={components} frontmatter={frontmatter} />
}
