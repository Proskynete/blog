const inviteTextToRead = 'Puedes accede al artículo desde el siguiente link: ';

export const getFirstLetter = (str) => str.charAt(0);

export const removeBlankSpace = (string) => string.replace(' ', '%20');

export const titleForSocialNetwork = (string) =>
	removeBlankSpace(`${string} - ${inviteTextToRead}`);

export const clearString = (string) => {
	return string
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[¿?]/g, '')
		.toLowerCase();
};

export const replaceSpaceForUnderscore = (string) => string.replace(/ /g, '_');
