import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return <Badge variant="secondary">{name}</Badge>;
} 