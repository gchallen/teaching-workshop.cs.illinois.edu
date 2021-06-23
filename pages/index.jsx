import Content from "../output/2021"
import components from "../layouts/Layout"
import frontmatter from "../output/2021.json"

export default function Page() {
  return <Content components={components} frontmatter={frontmatter} />
}
