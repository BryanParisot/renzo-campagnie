import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex h-14 items-center justify-center bg-primary text-white">
      <Link href="/">
        <span>LOGO</span>
      </Link>
    </div>
  );
};

export default Header;
