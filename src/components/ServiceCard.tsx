
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-t-4 border-t-brand-teal h-full flex flex-col">
      <CardHeader>
        <div className="p-2 rounded-full bg-brand-teal/10 w-fit mb-4">
          <div className="p-2 rounded-full bg-brand-teal/20 text-brand-teal">
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl text-brand-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="outline" 
          className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-medium"
        >
          <Link to={link}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
