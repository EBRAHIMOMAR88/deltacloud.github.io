
import React from "react";

interface ModuleItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex gap-4 p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-2 rounded-full bg-brand-teal/10 h-fit">
        <div className="p-1 rounded-full text-brand-teal">{icon}</div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-brand-blue mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ModuleItem;
