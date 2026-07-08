import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
  FaXTwitter,
} from "react-icons/fa6";
import { FiCalendar, FiHeart, FiMail, FiMapPin } from "react-icons/fi";

export const profile = {
  name: "Cyril Kurmann",
  role: "Jr. Software Engineer",
  tagline:
    "I build fast, reliable and user-friendly software. Passionate about open source and solving real world problems.",
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#", icon: FaGithub },
  { label: "Stack Overflow", href: "#", icon: FaStackOverflow },
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Email", href: "mailto:cyril.kurmann@gmail.com", icon: FiMail },
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
