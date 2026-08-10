import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background">
      <div className="font-mono text-sm w-full max-w-lg">
        <p className="text-muted-foreground mb-6">akbar@portfolio:~$ cd ~</p>
        <h1 className="text-5xl md:text-6xl font-normal text-foreground mb-4">404</h1>
        <p className="text-primary mb-8">
          <span className="text-muted-foreground">error:</span> page not found
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-primary">$</span> cd ~/
          <span className="cursor-blink text-primary">▌</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
