import Link from 'next/link'
import { Callout } from './Callout'

export function ComingSoon() {
  return (
    <Callout type="error" title="This content is not available yet">
      The team is still working on this page. If you want to help, please contribute on <Link href="https://github.com/MHCommunity/mhbasics/">GitHub</Link> or contact us on the <Link href="https://discord.gg/mousehunt">MouseHunt Discord</Link>.
    </Callout>
  )
}
