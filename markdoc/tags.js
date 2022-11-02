import { Callout } from '@/components/Callout'
import { ComingSoon } from '@/components/ComingSoon'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import Image from 'next/image'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  comingSoon: {
    selfClosing: true,
    render: ComingSoon,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
      classes: { type: String },
    },
    render: ({ src, alt = '', caption, classes = '' }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={classes} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  location: {
    selfClosing: true,
    attributes: {
      name: { type: String },
      src: { type: String },
      description: { type: String },
    },
    render: ({ name, src, description }) => (
      <div>
        <Image src={src} alt={name} width={750} height={275} className="rounded-lg shadow" />
        <blockquote>{description}</blockquote>
      </div>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
