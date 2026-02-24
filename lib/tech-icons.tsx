import {
  Gauge,
  LockKeyhole,
  PanelsTopLeft,
  PlugZap,
  ServerCog,
  ShoppingBag,
  Smartphone,
  KeyRound,
  Workflow
} from "lucide-react";

export const architectureItems = [
  { icon: PanelsTopLeft, label: "Admin dashboards and operational control systems" },
  { icon: Smartphone, label: "Customer-facing web and mobile applications" },
  { icon: KeyRound, label: "Role-based permission systems" }
];

export const dataItems = [
  { icon: ShoppingBag, label: "Shopify and third-party integrations" },
  { icon: Gauge, label: "High-performance UI and UX optimization" },
  { icon: Workflow, label: "Structured backend logic and API architecture" }
];

export const backendItems = [
  { icon: LockKeyhole, label: "Authentication and RBAC implementation" },
  { icon: PlugZap, label: "Integration-first product architecture" },
  { icon: ServerCog, label: "Self-hosted infrastructure and deployment" }
];
