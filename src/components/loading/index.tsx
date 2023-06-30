import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface IProps {
  isFetching: boolean;
  children: React.ReactNode;
}

export const Loading = ({ isFetching, children }: IProps) => {
  if (isFetching) {
    return (
      <div>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      </div>
    );
  }
  return <div>{children}</div>;
};




