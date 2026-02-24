import {
  Blocks,
  Database,
  KeyRound,
  LandPlot,
  ScanSearch,
  Scale,
  ShieldCheck,
  Waypoints
} from "lucide-react";

export const architectureItems = [
  { icon: LandPlot, label: "Multi-tenant application design" },
  { icon: KeyRound, label: "Role-based access control (RBAC)" },
  { icon: Waypoints, label: "Workflow and approval engine modeling" },
  { icon: ShieldCheck, label: "Immutable audit logging systems" }
];

export const dataItems = [
  { icon: Database, label: "Structured relational data modeling" },
  { icon: Blocks, label: "Constraint-based data integrity" },
  { icon: Scale, label: "Financial data handling and precision" }
];

export const backendItems = [
  { icon: ShieldCheck, label: "Secure API architecture" },
  { icon: KeyRound, label: "Enterprise authentication systems" },
  { icon: ScanSearch, label: "Deterministic rule engines" },
  { icon: Waypoints, label: "Third-party integration layers" }
];
