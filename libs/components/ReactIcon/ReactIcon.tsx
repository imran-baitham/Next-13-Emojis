import { IconType } from '@react-icons/all-files'
import React from 'react'
import * as AppIcons from './AppIcons'
export * from './AppIcons'

export type TAppIcons = keyof typeof AppIcons

export interface ReactIconLoaderProps
  extends React.HTMLAttributes<SVGAElement> {
  icon?: TAppIcons
  importName?: TAppIcons
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

/**
 * Replaces the original LazyReactIcon component due to NextJs bug that causes
 * high memory usage and slow compile times with the 'react-icons' version of
 * the library.
 */
export const ReactIcon = ({
  icon,
  ...props
}: ReactIconLoaderProps): JSX.Element | null => {
  type IconTypeKey = keyof typeof AppIcons
  type AppIconType = Record<IconTypeKey, IconType>
  const Icon = (AppIcons as AppIconType)[icon || 'FaRobot']

  return Icon ? <Icon {...props} /> : null
}

// interface IconProps {
//   onPress?: () => void
//   icon: TAppIcons
//   clsx?: string
// }

// export function Genricon({ icon, onPress, clsx }: IconProps) {
//   return (
//     <button
//       className={`flex justify-center items-center ml-1 border border-gray-300 dark:border-slate-700 p-[8px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-[0.97] ${clsx}`}
//       onClick={onPress}
//     >
//       <ReactIcon icon={icon} className="h-6 w-6" />
//     </button>
//   )
// }
