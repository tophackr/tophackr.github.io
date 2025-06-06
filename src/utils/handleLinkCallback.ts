export const handleLinkCallback = (url: string) => {
  if (url.startsWith('http')) {
    window.open(url, '_blank');
  } else if (url.startsWith('@')) {
    window.open(`https://t.me/${url.slice(1)}`, '_blank');
  } else if (url.includes('@')) {
    window.open(`mailto:${url}`, '_blank');
  } else if (url.startsWith('+')) {
    window.open(`tel:${url}`, '_blank');
  }
};
