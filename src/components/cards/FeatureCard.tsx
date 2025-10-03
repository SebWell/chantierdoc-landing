import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = "from-emerald-500 to-emerald-600",
  index = 0
}) => {
  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-gradient-to-br from-white to-slate-50 animate-scale-in shadow-lg"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <CardHeader className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-emerald-500 transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;