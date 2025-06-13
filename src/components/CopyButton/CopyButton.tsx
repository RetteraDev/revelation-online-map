import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

interface CopyButtonProps {
  additionSearchParams?: string;
}

function CopyButton({ additionSearchParams = '' }: CopyButtonProps) {
  const [tooltipTitle, setTooltipTitle] = useState('Копировать ссылку');

  const copyToClipboard = () => {
    const baseUrl = window.location.origin + window.location.pathname;

    const existingParams = new URLSearchParams(window.location.search);
    const newParams = new URLSearchParams(additionSearchParams);

    newParams.forEach((value, key) => {
      existingParams.set(key, value);
    });
    
    const url = `${baseUrl}?${existingParams.toString()}`;

    navigator.clipboard.writeText(url)
      .then(() => {
        setTooltipTitle('Ссылка скопирована!');
        setTimeout(() => setTooltipTitle('Копировать ссылку'), 2000);
      })
      .catch(err => {
        console.error('Ошибка при копировании: ', err);
        setTooltipTitle('Ошибка копирования');
      });
  };

  return (
    <Tooltip title={tooltipTitle} arrow>
      <Button
        variant="outlined"
        startIcon={<FileCopyIcon />}
        onClick={copyToClipboard}
        fullWidth
        sx={{
          textTransform: 'none'
        }}
      >
        Копировать ссылку
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
