export const formatViewCount = (count: number): string => {
  if (count >= 1000) {
    const k = count / 1000;
    return `${k.toFixed(1)}k`; // Format to 1 decimal place
  }
  return count.toString(); // Return the number as is if it's less than 1000
};
