export const getFormatedDate = (date?: Date): string => {
  const d = date || new Date();
  d.setDate(d.getDate() - 1);

  return d.toISOString().split('T')[0];
};
