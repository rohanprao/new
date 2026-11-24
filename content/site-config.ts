export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  ogImage: string;
  description: string;
  links: {
    linkedin: string;
    twitter: string;
    youtube: string;
  };
  contact: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    supportEmail: string;
    salesEmail: string;
  };
  certifications: string[];
}

export const siteConfig: SiteConfig = {
  name: "Cittagent Technologies",
  tagline: "Industrial AI Platform for Mission-Critical Manufacturing",
  url: "https://cittagent.com",
  ogImage: "/og-image.png",
  description: "Cittagent Technologies provides FactoryOps AI, an industrial intelligence platform to monitor, analyze, and optimize manufacturing equipment in real time.",
  links: {
    linkedin: "https://www.linkedin.com/company/cittagent/?viewAsMember=true",
    twitter: "https://twitter.com/cittagent",
    youtube: "https://youtube.com",
  },
  contact: {
    address: "CA Site 1, HAL 3rd Stage EXTN, behind Hotel Leela Palace, HAL 2nd Stage, Kodihalli",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560008",
    country: "India",
    phone: "+91 90087 63311",
    supportEmail: "support@cittagent.com",
    salesEmail: "sales@cittagent.com",
  },
  certifications: [
    "IEC 62443 Industrial Cybersecurity Ready [REPLACE]",
    "ISO 50001 Energy Management Telemetry [REPLACE]",
    "SOC 2 Type II Certified Cloud [REPLACE]",
  ]
};
