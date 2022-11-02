import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(className,
        // Base styles.
        'prose prose-slate max-w-none dark:prose-invert dark:text-slate-300 text-lg leading-7',
        // Headings.
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // Lead.
        'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
        // Links.
        'prose-a:font-semibold dark:prose-a:text-sky-400',
        'prose-a:text-sky-700 prose-a:no-underline hover:prose-a:text-sky-600',
        // <pre>.
        'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // <hr>.
        'dark:prose-hr:border-slate-800',
        // Blockquotes.
        'prose-blockquote:text-slate-400 dark:prose-blockquote:text-slate-300'
      )}
      {...props}
    />
  )
}
