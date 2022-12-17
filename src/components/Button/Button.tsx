import './Button.css';
import React from 'react';
import classnames from 'classnames';

export interface NccGenericButtonProps {
	onTap: any;
	variations: Object;
	children: any;
}

export function NccButtonGenetic(props: NccGenericButtonProps) {
	let {onTap, variations, children} = props;
	variations = variations || {};
	const classes = {
		'button': true,
		...variations
	};
	return (
		<button className={classnames(classes)} onClick={onTap}>
			{children}
		</button>
	);
}

export interface NccButtonProps {
	onTap: any;
	icon: any;
	text: string;
	filled: boolean;
	outline: boolean;
	transparent: boolean;
	rounded: boolean;
	nopadding: boolean;
	iconlast: boolean;
	iconfirst: boolean;
	status: string;
	darkText: boolean;
	lightText: boolean;
}

export default function NccButton(props: NccButtonProps) {
	let {
		onTap,
		icon,
		text,
		filled,
		outline,
		transparent,
		rounded,
		nopadding,
		iconlast,
		iconfirst,
		status,
		darkText,
		lightText
	} = props;
	const variations = {
		'button--filled': filled || true,
		'button--outline': outline,
		'button--transparent': transparent,
		'button--rounded': rounded,
		'button--nopadding': nopadding,
		'button--icon-last': iconlast,
		'button--icon-first': iconfirst,
		'button--success': status === 'success',
		'button--warning': status === 'warning',
		'button--info': status === 'info',
		'button--dark-text': darkText,
		'button--light-text': lightText,
	};
	return (
		<NccButtonGenetic variations={variations} onTap={onTap}>
			{icon && <span className={'button__icon'}>{icon}</span>}
			{icon && text && <span className={'button__gap'}></span>}
			{text && <span className={'button__text'}>{text}</span>}
		</NccButtonGenetic>
	);
}
