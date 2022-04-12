import components from "../layouts/Layout"
import Content from "../output/index"
import frontmatter from "../output/index.json"

export default function Page() {
  return <Content components={components} frontmatter={frontmatter} />
}
