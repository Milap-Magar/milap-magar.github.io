import React, { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center bg-green-50 dark:bg-green-400">
          <Loading />
        </div>
      ) : (
        <div className="flex h-screen bg-green-50 overflow-hidden">
          <div className="relative w-16 flex flex-col items-center">
            <div className="absolute top-20">
              {/* Circle */}
              <div className="w-16 h-14 bg-green-500 blur-md rounded-full "></div>
              {/* Line */}
              <div className="h-screen w-3 bg-green-500 blur-sm rounded-full mx-auto"></div>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden snap-y snap-mandatory hide-scrollbar">
            <Navbar />
            <main className="flex-1 scroll-smooth">{children}</main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
