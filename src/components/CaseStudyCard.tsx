
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  industry,
  description,
  imageUrl,
  link,
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-brand-teal text-white">
            {industry}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-brand-blue">{title}</CardTitle>
        <CardDescription className="text-brand-teal font-medium">
          {client}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="outline" 
          className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
        >
          <Link to={link}>
            Read Case Study
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
