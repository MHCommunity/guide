import { Layout } from '@/components/Layout'
import '@/styles/global.css'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import 'focus-visible'
import Head from 'next/head'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error('Cannot add `h3` to table of contents without a preceding `h2`')
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title
  let pageTitle = pageProps.markdoc?.frontmatter.pageTitle || `${pageProps.markdoc?.frontmatter.title} - MouseHunt Essentials Guide`
  let description = pageProps.markdoc?.frontmatter.description
  let tableOfContents = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : []
  let image = pageProps.markdoc?.frontmatter.image ? `https://guide.mouse.rip/${pageProps.markdoc?.frontmatter.image}` : 'https://guide.mouse.rip/images/social.png'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        {description && <meta name="description" content={description} />}

        {/** Open Graph tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        {description && <meta property="og:description" content={description} />}
        {image && <meta property="og:image" content={image} />}

        {/** Twitter Card tags */}
        {image && <meta name="twitter:card" content="summary" />}
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
