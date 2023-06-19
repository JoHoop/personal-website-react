import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	scrolldownWrapper: {
		left: '50%',
		position: 'absolute',
		textAlign: 'center',
		bottom: 0,
		transform: 'translate(-50%, -50%)',
	},
	scrolldown: {
		border: '2px solid #FFFFFF',
		borderRadius: '30px',
		height: '46px',
		margin: '0 auto 8px',
		textAlign: 'center',
		width: '30px',
	},
	scrolldownP1: {
		animationDuration: '1.5s',
		animationName: '$scrolldown',
		animationIterationCount: 'infinite',
		fill: '#FFFFFF',
	},
	scrolldownP2: {
		animationDuration: '1.5s',
		animationName: '$scrolldown',
		animationIterationCount: 'infinite',
		animationDelay: '0.75s',
		fill: '#FFFFFF',
	},
	'@keyframes scrolldown': {
		'0%': {
			opacity: 0,
			transform: 'translate(0, -8px)',
		},
		'50%': {
			opacity: 1,
			transform: 'translate(0, 0)',
		},
		'100%': {
			opacity: 0,
			transform: 'translate(0, 8px)',
		},
	},
}));

export const ScrollIndicator = () => {
	const classes = useStyles();

	return (
		<div className={classes.scrolldownWrapper}>
			<div className={classes.scrolldown}>
				<svg height="20" width="6">
					<circle className={classes.scrolldownP1} cx="3" cy="10" r="1" />
					<circle className={classes.scrolldownP2} cx="3" cy="10" r="1" />
				</svg>
			</div>
		</div>
	);
}
