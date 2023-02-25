import { registerBlockType } from '@wordpress/blocks';

/* adds styles to bundle */
import './style/style-admin.scss';

import blockConfig from '../block.json';

import { blockIcon } from './constants';
import Edit from './edit';
import Save from './save';

const jsonData = blockConfig;

/** Registering the block with the name of the block and the attributes of the block. */
registerBlockType( jsonData.name, {
	...jsonData,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
	icon: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
			<path
				fill="#654ff0"
				d="M376 0v3.3c0 38.76-31.42 70.17-70.17 70.17-38.76 0-70.17-31.42-70.17-70.17V0H0v612h612V0z"
			/>
			<path
				fill="#fff"
				d="M142.16 329.81h40.56l27.69 147.47h.5l33.28-147.47h37.94l30.06 149.28h.59l31.56-149.28h39.78L332.43 546.5h-40.25l-29.81-147.47h-.78L229.68 546.5h-41zm287.69 0h63.94l63.5 216.69h-41.84l-13.81-48.22H428.8l-10.66 48.22h-40.75zm24.34 53.41-17.69 79.5h55.06l-20.31-79.5z"
			/>
		</svg>
	),
	supports: {
		align: true,
		className: true,
		spacing: {
			margin: true, // Enable margin UI control.
			padding: true, // Enable padding UI control.
			blockGap: true, // Enables block spacing UI control.
		},
	},
	attributes: {
		message: {
			type: 'string',
			default: '',
		},
		num: {
			type: 'number',
			default: 7,
		},
	},
} );
