export const durabilityColor = (value: number): string => {
  if (value <= 4) return '#000000'

  const colors: string[] = [
    '#ff3300',
    '#fe3f00',
    '#fd4a00',
    '#fc5300',
    '#fa5c00',
    '#f86500',
    '#f66d00',
    '#f37500',
    '#ef7d00',
    '#ec8400',
    '#e88c00',
    '#e39200',
    '#df9900',
    '#db9f00',
    '#d6a500',
    '#d1ab00',
    '#ccb100',
    '#c7b700',
    '#c1bc00',
    '#bbc200',
    '#b5c700',
    '#aecd00',
    '#a7d200',
    '#9fd700',
    '#97dc00',
    '#8de100',
    '#82e700',
    '#74ec00',
    '#65f100',
    '#53f600',
    '#3cfa00',
    '#09ff00',
    '#09ff00',
    '#09ff00',
  ]

  return colors[Math.floor(value / 3)]
}
