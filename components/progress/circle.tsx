/** @format */

import { CircularProgress } from '@mui/material';
export default function CircleProgress(props: any) {
	const { sx, ...childProps } = props;
	return <CircularProgress sx={{ color: 'white', ...sx }} {...childProps} />;
}
