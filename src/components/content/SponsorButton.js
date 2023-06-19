import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  svgHover: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:focus': {
      transform: 'scale(1.1)',
    },
    transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
    transform: 'scale(1)',
    overflow: 'visible !important',
  },
}));

export const DownloadResumeIcon = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      width='16'
      height='16'
      className={classes.svgHover}
    >
    </svg>
  );
};
