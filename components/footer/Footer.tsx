import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Jeffreyson Nguyen. All rights reserved.
    </div>
  );
};

export default Footer;
