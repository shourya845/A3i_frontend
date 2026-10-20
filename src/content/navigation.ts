import { portfolio } from "./products";
export type NavigationItem = {
  label: string;
  description: string;
  key: string;
};
export type NavigationGroup = {
  title: string;
  icon: string;
  items: NavigationItem[];
};
// Preserve the official navigation portfolio independently of homepage stories.
export const products = portfolio;
export const industries: NavigationGroup[] = [
  {
    title: "Financial Services",
    icon: "bank",
    items: [
      {
        label: "Banks",
        description: "Onboarding, KYC, credit and service operations",
        key: "banks",
      },
      {
        label: "Financial Advisors",
        description: "Client reporting, meeting prep and follow-up",
        key: "advisors",
      },
      {
        label: "Hedge Funds",
        description: "Research, diligence and signal extraction",
        key: "funds",
      },
      {
        label: "Fintechs",
        description: "Support, underwriting and compliance at scale",
        key: "fintechs",
      },
    ],
  },
  {
    title: "Energy",
    icon: "bolt",
    items: [
      {
        label: "Grid & Operations",
        description: "Outage response, field ops and asset health",
        key: "grid",
      },
      {
        label: "Circuit Design",
        description: "Schematic review, specs and design QA",
        key: "circuits",
      },
      {
        label: "Renewable Energy",
        description: "Site diligence, permitting and performance",
        key: "renewables",
      },
      {
        label: "Energy Trading",
        description: "Market intel, curves and position reporting",
        key: "trading",
      },
    ],
  },
  {
    title: "Retail",
    icon: "store",
    items: [
      {
        label: "Recruiters",
        description: "CV screening, shortlists and candidate follow-up",
        key: "recruiters",
      },
      {
        label: "Restaurants",
        description: "Voice ordering, bookings and reviews",
        key: "restaurants",
      },
      {
        label: "Clinics",
        description: "Scheduling, intake and patient follow-up",
        key: "clinics",
      },
      {
        label: "Hospitality",
        description: "Reservations, guest service and upsell",
        key: "hospitality",
      },
    ],
  },
];
export const company: NavigationGroup[] = [
  {
    title: "About A3i",
    icon: "building",
    items: [
      {
        label: "About A3i",
        description: "Our mission, team and the story behind the platform",
        key: "about",
      },
      {
        label: "Contact",
        description: "Talk to us about your use case",
        key: "contact",
      },
      {
        label: "Collaborations",
        description: "Partner with us — tech, industry, resellers, academia",
        key: "collaborations",
      },
    ],
  },
  {
    title: "Career",
    icon: "briefcase",
    items: [
      {
        label: "Careers",
        description: "Open roles — build the future of applied AI with us",
        key: "careers",
      },
      {
        label: "Competitions",
        description: "Challenges that lead to internships and offers",
        key: "competitions",
      },
    ],
  },
];
