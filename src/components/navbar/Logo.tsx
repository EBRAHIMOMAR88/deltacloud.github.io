
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-heading font-bold text-brand-blue">
        Delta Cloud <span className="text-brand-teal">Associates</span>
      </span>
    </Link>
  );
};

export default Logo;
