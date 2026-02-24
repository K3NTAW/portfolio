export const trustMetrics = [
  {
    label: "Legacy ERP systems consolidated",
    value: "5",
    note: "Normalized into one reporting model"
  },
  {
    label: "Audit prep acceleration",
    value: "30%+",
    note: "Faster evidence assembly for controls teams"
  },
  {
    label: "Duplicate payment reduction",
    value: "60%",
    note: "Rules-driven verification and event tracking"
  }
] as const;

export const trustSignals = [
  "Designed for GDPR and Swiss FADP-aligned data governance processes",
  "Built with immutable, append-only event history for critical workflows",
  "Structured around role-based access control and approval matrices"
] as const;

export const testimonial = {
  quote:
    "Architecture-first implementation gave us a clear audit trail and fewer operational exceptions across finance workflows.",
  attribution: "Client reference available on request (NDA-protected)"
} as const;
