const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return null;

  const allowedTypes = ['work', 'home', 'personal'];
  return allowedTypes.includes(contactType) ? contactType : null;
};

const parseIsFavorite = (isFavorite) => {
  if (typeof isFavorite === 'string') {
    if (isFavorite.toLowerCase() === 'true') return true;
    if (isFavorite.toLowerCase() === 'false') return false;
  }

  if (typeof isFavorite === 'boolean') return isFavorite;

  return null;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavorite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavorite = parseIsFavorite(isFavorite);

  return {
    ...(parsedContactType !== null && { contactType: parsedContactType }),
    ...(parsedIsFavorite !== null && { isFavorite: parsedIsFavorite }),
  };
};
