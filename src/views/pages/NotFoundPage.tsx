import { Link } from 'react-router-dom';
import { routes } from '@/config/routes';
import { Button } from '@/views/components/Button';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-6">Page Not Found</h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to={routes.home}>
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
