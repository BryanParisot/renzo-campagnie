import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/logos/logo_rectangle.jpg";

const Header = () => {
  return (
    <Image
      src={logo}
      alt="Logo Renzo"
      width={100}
      height={100}
      className="flex h-80 w-full  items-center justify-center bg-cover text-white"
    >
      {/* <Link href="/">
        <Image src={logo} alt="Logo Renzo" width={170} height={150}></Image>
      </Link> */}
    </Image>
  );
};

export default Header;
