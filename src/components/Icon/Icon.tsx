import { Avatar, AvatarProps } from '@mui/material';
import { useState } from 'react';

interface ErrorHandlingIconProps extends AvatarProps {
  fallback?: React.ReactNode;
}

function Icon({ src, fallback = null, ...props }: ErrorHandlingIconProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    return fallback ? <>{fallback}</> : null;
  }

  return <Avatar src={src} onError={handleError} {...props} />;
}

export default Icon;
