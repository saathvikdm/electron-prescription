function getPath(item) {
  if (item.type === 'bill') return '/billing';
  if (item.type === 'certificate') return '/certificate';
  if (item.type === 'prescription') return '/issue';
  if (item.type === 'FollowUp') return '/issue';
  return '/';
}

export default getPath;
