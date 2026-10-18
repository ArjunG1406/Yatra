import React from 'react'
import { Mail } from 'lucide-react'

export type IconProps = {
  size?: number
  className?: string
}

export const InstagramIcon = ({ size = 24, className = '' }: IconProps) =>
  React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      'aria-hidden': true,
    },
    React.createElement('rect', { width: 20, height: 20, x: 2, y: 2, rx: 5, ry: 5 }),
    React.createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
    React.createElement('line', { x1: 17.5, x2: 17.51, y1: 6.5, y2: 6.5 })
  )

export const TwitterIcon = ({ size = 24, className = '' }: IconProps) =>
  React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      className,
      'aria-hidden': true,
    },
    React.createElement('path', {
      d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    })
  )

export const YoutubeIcon = ({ size = 24, className = '' }: IconProps) =>
  React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      'aria-hidden': true,
    },
    React.createElement('path', {
      d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17',
    }),
    React.createElement('polygon', { points: '10 15 15 12 10 9 10 15', fill: 'currentColor', stroke: 'none' })
  )

export const LinkedinIcon = ({ size = 24, className = '' }: IconProps) =>
  React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className,
      'aria-hidden': true,
    },
    React.createElement('path', {
      d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
    }),
    React.createElement('rect', { width: 4, height: 12, x: 2, y: 9 }),
    React.createElement('circle', { cx: 4, cy: 4, r: 2 })
  )

export { InstagramIcon as Instagram, TwitterIcon as Twitter, YoutubeIcon as Youtube, LinkedinIcon as Linkedin, Mail }

export type SocialLink = {
  name: string
  link: string
  icon: React.ComponentType<IconProps>
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/hultprizeucek/',
    icon: InstagramIcon,
  },
  {
    name: 'X (Twitter)',
    link: 'https://x.com/HULTPRIZEUCEK',
    icon: TwitterIcon,
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@HultPrizeUCEK',
    icon: YoutubeIcon,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/hult-prize-ucek/',
    icon: LinkedinIcon,
  },
  {
    name: 'Email',
    link: 'mailto:hultprizeucek@gmail.com',
    icon: Mail,
  },
]
