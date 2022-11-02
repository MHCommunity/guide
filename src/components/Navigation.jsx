import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-md', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul role="list" className="space-y-2 mt-3">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'flex items-center group',
                      link.href === router.pathname
                        ? 'font-semibold text-sky-500 '
                        : 'text-slate-500 hover:text-sky-500 dark:text-slate-300'
                    )}
                  >
                    {link.image && (
                      <Image
                        src={link.image}
                        alt={link.title}
                        width={24}
                        height={24}
                        className="group-hover:opacity-75"
                      />
                    )}
                    <span className={clsx(
                      'text-base',
                      link.image ? 'ml-3 text-sm' : 'ml-0'
                    )}>

                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
