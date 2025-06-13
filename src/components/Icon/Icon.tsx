import { Avatar, AvatarProps } from '@mui/material';
import { useState } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

interface ErrorHandlingIconProps extends AvatarProps {
  fallback?: React.ReactNode;
}

function Icon({ src, fallback = null, ...props }: ErrorHandlingIconProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  if (error || !src) {
    return fallback ? <>{fallback}</> : <Avatar {...props} ><QuestionMarkIcon/></Avatar>;
  }

  return <Avatar src={src} onError={handleError} {...props} />;
}

export default Icon;
