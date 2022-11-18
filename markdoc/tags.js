import { Button } from '@/components/Button'
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
    render: ({ name, src, description = '' }) => (
      <div>
        <Image src={src} alt={name} width={750} height={275} className="rounded-lg shadow" />
        <blockquote>{description}</blockquote>
      </div>
    ),
  },
  weapon: {
    selfClosing: true,
    attributes: {
      name: { type: String },
      src: { type: String },
      description: { type: String },
    },
    render: ({ name, src, description = '' }) => (
      <div className="flex flex-col items-center">
        <div className="text-slate-500">{description}</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={name} width={250} height={250} className="shadow-md rounded-md ml-10" />
      </div>
    ),
  },
  'weapon-stats': {
    selfClosing: true,
    attributes: {
      powerType: { type: String },
      power: { type: String },
      powerBonus: { type: String },
      luck: { type: String },
      attraction: { type: String },
      cheese: { type: String },
      title: { type: String },
    },
    render: ({ powerType, power, powerBonus, luck, attraction = false, cheese = false, title = false }) => (
      <div>
        <h2>Stats</h2>
        <table>
          <tbody>
            <tr>
              <td>Power Type</td>
              <td>{powerType}</td>
            </tr>
            <tr>
              <td>Power</td>
              <td>{power}</td>
            </tr>
            <tr>
              <td>Power Bonus</td>
              <td>{powerBonus}</td>
            </tr>
            <tr>
              <td>Luck</td>
              <td>{luck}</td>
            </tr>
            {attraction && (
              <tr>
                <td>Attraction Bonus</td>
                <td>{attraction}</td>
              </tr>
            )}
            {cheese && (
              <tr>
                <td>Cheese Effect</td>
                <td>{cheese}</td>
              </tr>
            )}
            {title && (
              <tr>
                <td>Title to Equip</td>
                <td>Knight</td>
              </tr>
            )}
          </tbody>
        </table>
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
      thumbnail: { type: String },
    },
  },
}

export default tags
