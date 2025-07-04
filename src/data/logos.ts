// data/logos.ts
import CanadianTire from '../../public/png/canadiantire.svg'
import CanadaGoose from '../../public/png/CanadaGoose.svg'
import AirCanada from '../../public/png/aircanada.svg'

import Lululemon from '../../public/png/Lululemon.svg'
import Starbucks from '../../public/png/starbucks.svg'
import IKEA from '../../public/png/ikea.svg'

import Pepsi from '../../public/png/pepsi.svg'
import Armani from '../../public/png/Subway.svg'

import Mercedes from '../../public/png/mercedesbenz.svg'

export const logoData = [
  // Row 1 (justify-end)
  [{ src: AirCanada, bgColor: 'bg-stone-950', imageWidthClass: 'w-4/5', alt: 'Air Canada Logo' }],
  // Row 2 (justify-end)
  [
    { src: Armani, bgColor: 'bg-white', imageWidthClass: 'w-1/2', alt: 'Armani Logo' },
    { src: IKEA, bgColor: 'bg-[#2756a1]', imageWidthClass: 'w-10/12', alt: 'IKEA Logo' },
  ],
  // Row 3 (no justify-end)
  [
    { src: Starbucks, bgColor: 'bg-white', imageWidthClass: 'w-4/5', alt: 'Starbucks Logo' },
    { src: CanadaGoose, bgColor: 'bg-[#A8BF8F]', imageWidthClass: 'w-4/5', alt: 'Canada Goose Logo' },
    { src: Mercedes, bgColor: 'bg-black', imageWidthClass: 'w-4/5', alt: 'Mercedes-Benz Logo' },
  ],
  // Row 4 (no justify-end)
  [
    { src: Pepsi, bgColor: 'bg-[#106898]', imageWidthClass: 'w-4/5', alt: 'Pepsi Logo' },
    { src: Lululemon, bgColor: 'bg-white', imageWidthClass: 'w-4/5', alt: 'Lululemon Logo' },
    { src: CanadianTire, bgColor: 'bg-white', imageWidthClass: 'w-4/5', alt: 'Canadian Tire Logo' },
  ],
];