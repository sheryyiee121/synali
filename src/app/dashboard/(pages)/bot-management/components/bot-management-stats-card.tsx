interface StatsCardProps {
  icon: React.ReactNode;
  value: number | string;
  label: string;
  bgColor: string;
  change?: string;
}

export const BotStatsCard: React.FC<StatsCardProps> = ({
  icon,
  value,
  label,
  bgColor,
  change,
}) => (
  <div className="bg-card border border-border rounded-xl p-4">
    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
      <h3 className="text-sm font-medium text-card-foreground">{label}</h3>
      <div className={`p-2 ${bgColor} rounded-lg`}>{icon}</div>
    </div>
    <div className="space-y-1">
      <div className="text-2xl font-bold text-card-foreground">{value}</div>
      {change && <p className="text-xs text-muted-foreground">{change}</p>}
    </div>
  </div>
);
