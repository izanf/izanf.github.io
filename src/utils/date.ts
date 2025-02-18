export const formatDate = (date: string) => {
  const options = { year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const };

  return Intl.DateTimeFormat('en-US', options).format(new Date(date));
}
