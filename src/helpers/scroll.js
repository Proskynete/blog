import { easeInOutCubic } from '@Helpers/animations.helper';

export const scrollToTop = () => {
	const current = document.documentElement.scrollTop || document.body.scrollTop;
	if (current > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, current - current / 20);
	}
};

export const scrollToNextContent = (title) => {
	smoothScroll(title, 1000);
};

const smoothScroll = (id, duration) => {
	const target = document.querySelector(id);
	const targetPosition =
		target.getBoundingClientRect().top + window.scrollY - 30;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	let startTime = null;

	const animation = (currentTime) => {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	};
	requestAnimationFrame(animation);
};

export const toggleClassWhenScrolling = (listOfItems) => {
	const listOfPositionItems = [];
	listOfItems.forEach((item) => {
		const element = document.querySelector(`#${item.link}`);
		listOfPositionItems.push(
			element.getBoundingClientRect().top + window.scrollY - 35,
		);
	});

	listOfPositionItems.push(
		document.getElementsByTagName('body')[0].clientHeight,
	);

	window.addEventListener('scroll', () => {
		const currentPosition = window.pageYOffset;

		for (let i = 0; i < listOfItems.length; i++) {
			const link = document.querySelector(`a[href='#${listOfItems[i].link}']`);

			if (
				currentPosition >= listOfPositionItems[i] &&
				currentPosition < listOfPositionItems[i + 1]
			) {
				link.classList.add('current');
			} else {
				link.classList.remove('current');
			}
		}
	});
};
