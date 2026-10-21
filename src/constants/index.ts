// Copyright (c) 2023 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import type { IconType } from 'react-icons';
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { SiBuymeacoffee, SiGithubsponsors, SiPaypal } from 'react-icons/si';

export interface Platform {
  name: string;
  description: string;
  url: string;
  icon: IconType;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const PLATFORMS: Platform[] = [
  {
    name: 'GitHub Sponsors',
    description: 'Support my work monthly or once',
    url: 'https://github.com/sponsors/srilakshmikanthanp?o=esb',
    icon: SiGithubsponsors
  },
  {
    name: 'PayPal',
    description: 'Send a contribution of any amount',
    url: 'https://www.paypal.me/srilakshmikanthanp',
    icon: SiPaypal
  },
  {
    name: 'Buy Me a Coffee',
    description: 'Buy me a coffee as a thank you',
    url: 'https://www.buymeacoffee.com/srilakshmikanthanp',
    icon: SiBuymeacoffee
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/srilakshmikanthanp', icon: FaGithub },
  { name: 'Instagram', url: 'https://instagram.com/srilakshmikanthanp', icon: FaInstagram },
  { name: 'Twitter', url: 'https://twitter.com/itsmekanth', icon: FaXTwitter },
  { name: 'Facebook', url: 'https://www.facebook.com/srilakshmikanthanp', icon: FaFacebook }
];
