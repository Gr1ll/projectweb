import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa6";
import { FiCalendar, FiHeart, FiMapPin } from "react-icons/fi";

export const profile = {
  name: "Cyril Kurmann",
  role: "Jr. Software Engineer",
  tagline:
    "I love finding solutions to problems and building things that make a difference.",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Gr1ll", icon: FaGithub },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/18949209/grill",
    icon: FaStackOverflow,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cyril-kurmann-b623a019a/",
    icon: FaLinkedinIn,
  },
];

export type InfoItem = {
  icon: IconType;
  label: string;
  value: string;
};

export const aboutInfo: InfoItem[] = [
  { icon: FiMapPin, label: "From", value: "Switzerland" },
  { icon: FiCalendar, label: "Apprenticeship", value: "Completed Aug 2025" },
  {
    icon: FiHeart,
    label: "Interests",
    value: "Coding, Drones, Cars, Tech",
  },
];
