export type Project = {
  title: string;
  context: string;
  challenge: string;
  role: string;
  built: string[];
  technicalHighlights: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    title: "Bakastore App (Live on App Store)",
    context:
      "Developed and deployed a production mobile application and backend infrastructure for a Swiss retail business operating within a tournament-driven niche.",
    challenge:
      "The store required a centralized digital system for tournaments, commerce operations, promotions, and customer loyalty.",
    role: "Independent software engineer with full ownership of product and delivery",
    built: [
      "Full mobile application (Expo)",
      "Backend architecture and API logic",
      "Shopify integration and custom Shopify admin dashboard",
      "POS extension",
      "Role-based access control",
      "Loyalty and customer card system",
      "Analytics dashboard"
    ],
    technicalHighlights: [
      "RBAC system for store roles and permissions",
      "Shopify API integration across storefront and operations",
      "Performance-focused frontend architecture",
      "Secure backend structure for business workflows"
    ],
    impact: [
      "Centralized customer engagement, event management, and commerce workflows into one digital platform",
      "Real-world production deployment currently in active use",
      "Established a structured foundation for long-term product ownership and iteration"
    ]
  },
  {
    title: "KubbZuerich.ch",
    context:
      "Local KUBB club in Zurich organizing tournaments and community events.",
    challenge:
      "Events were coordinated through WhatsApp and manual follow-up, creating avoidable operational chaos.",
    role: "Product engineer for platform design and implementation",
    built: [
      "Tournament hosting platform",
      "Registration system for players and teams",
      "Backend admin overview for organizers",
      "Centralized public website hub"
    ],
    technicalHighlights: [
      "Structured admin controls for event operations",
      "Clear backend logic for registrations and status updates",
      "Mobile-ready UI for participants and organizers"
    ],
    impact: [
      "Eliminated fragmented event coordination",
      "Created clear organizer visibility across tournaments",
      "Improved operational efficiency for the club"
    ]
  },
  {
    title: "Private Home Server Infrastructure",
    context:
      "A self-hosted environment designed to reduce dependency on paid cloud subscriptions.",
    challenge:
      "Needed stable, secure, remotely accessible services while maintaining control over deployment and infrastructure cost.",
    role: "Infrastructure builder and operator",
    built: [
      "Dockerized core services",
      "Kubernetes cluster setup",
      "Remote global access architecture",
      "Custom container configuration and service orchestration"
    ],
    technicalHighlights: [
      "Containerization and orchestration depth",
      "Security-aware networking and service exposure",
      "Practical DevOps and systems operations experience"
    ],
    impact: [
      "Reduced dependence on recurring paid services",
      "Built strong hands-on infrastructure capability",
      "Improved confidence in production deployment architecture"
    ]
  }
];
