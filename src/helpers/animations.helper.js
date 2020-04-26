export const easeInOutCubic = (t, b, c, d) => {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t + b;
	t--;
	return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const easeInQuart = (t, b, c, d) => {
	t /= d;
	return c * t * t * t * t + b;
};

export const easeOutQuart = (t, b, c, d) => {
	t /= d;
	t--;
	return -c * (t * t * t * t - 1) + b;
};

export const easeInOutQuart = (t, b, c, d) => {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t * t * t + b;
	t -= 2;
	return (-c / 2) * (t * t * t * t - 2) + b;
};

export const easeInQuint = (t, b, c, d) => {
	t /= d;
	return c * t * t * t * t * t + b;
};
