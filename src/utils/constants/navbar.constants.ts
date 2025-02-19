import {
  Home,
  Info,
  Users,
  HelpCircle,
  Newspaper,
  BookOpen,
  ListOrdered,
} from "lucide-react";

export const NAV_ROUTES = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Jure Sanguinis", href: "/about-js", icon: Info },
  { label: "Community", href: "/community", icon: Users },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
  { label: "News", href: "/news", icon: Newspaper },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "JS Tracker", href: "/tracker", icon: ListOrdered },
];