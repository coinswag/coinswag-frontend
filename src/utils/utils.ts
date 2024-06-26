// const backgroundColors = [
//    '#ddd6fe',
//    '#fbcfe8',
//    '#d9f99d',
//    '#bae6fd',
//    '#a7f3d0',
//    '#f5d0fe'
//    // Add more colors as neesded
//  ]

 export const textColorMap = {
   '#ddd6fe': '#5b21b6', // Corresponding text color for the background
   '#fbcfe8': '#9d174d',
   '#d9f99d': '#3f6212',
   '#bae6fd': '#075985',
   '#a7f3d0': '#065f46',
   '#f5d0fe': '#86198f'
 } as const

 export const addZero =(value: number)=>value > 10? value: `0${value}`;

 export function shortenAddress(address:string) {
  if (!address) return '';
  
  const start = address.slice(0, 5).toLowerCase();
  const end = address.slice(-4); // This preserves the original case
  
  return `${start}...${end}`;
}