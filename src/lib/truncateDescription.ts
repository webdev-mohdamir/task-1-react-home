// Truncate function to shorten text to a specific length
export const truncateDescription = (
  description: string,
  maxLength: number = 76
): string => {
  if (description.length <= maxLength) {
    return description;
  }
  return `${description.slice(0, maxLength)}...`; // Add ellipses to indicate truncation
};
