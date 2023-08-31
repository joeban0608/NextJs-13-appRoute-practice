import Link from "next/link";
import React from "react";

const BackToHome = ({ homeName }: { homeName: string }) => {
  return (
    <Link href="/" className="button text-center">
      back to {homeName}
    </Link>
  );
};

export default BackToHome;
