import Image from 'next/image'

export function normalizeIcon(icon) {
    return icon.replace(/ /g, '').replace(/\//g, '-').toLowerCase();
}

export function Stat({ title, value, icon }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 flex items-center">
        <Image src={icon} alt={title} width={32} height={32} />
        <div className="ml-3">{value}</div>
      </dd>
    </div>
  )
}

export function WeaponStats({ powerType, power, powerBonus, luck, attraction = false, cheese = false, title = false }) {
  return (
    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {powerType && (<Stat title="Power Type" value={powerType} icon={`/images/power-types/${normalizeIcon(powerType)}.png`} />)}
      {power && (<Stat title="Power" value={power} icon="/images/stats/power.png" />)}
      {powerBonus && (<Stat title="Power Bonus" value={powerBonus} icon="/images/stats/power.png" />)}
      {luck && (<Stat title="Luck" value={luck} icon="/images/stats/luck.png" />)}
      {attraction && (<Stat title="Attraction Bonus" value={attraction} icon="/images/stats/attraction.png" />)}
      {cheese && (<Stat title="Cheese Effect" value={cheese} icon="/images/stats/cheese.png" />)}
      {title && (
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Title to Eqiup</dt>
            <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900 flex items-center">
              <Image src={`/images/shields/${normalizeIcon(title)}.png`} alt="Title" width={32} height={32} />
              <div className="ml-3">{title}</div>
            </dd>
          </div>
        )}
    </div>
  )
}
