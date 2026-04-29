/**
 * Inject Cloudinary transformation parameters into a Cloudinary URL.
 * Safe to call with empty strings (returns empty string).
 */
export function cloudinaryUrl(
  url: string,
  transforms: string = 'f_auto,q_auto'
): string {
  if (!url) return '';
  // Only transform Cloudinary URLs — pass anything else through unchanged
  if (!url.includes('res.cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/${transforms}/`);
}

/** Full-width series image — large but not ridiculous */
export function seriesImage(url: string): string {
  return cloudinaryUrl(url, 'f_auto,q_auto,w_2400');
}

/** Cover image for series cards — smaller, loads fast */
export function coverImage(url: string): string {
  return cloudinaryUrl(url, 'f_auto,q_auto,w_800,ar_3:2,c_fill');
}

/** Full-screen hero image — maximum quality, wide */
export function heroImage(url: string): string {
  return cloudinaryUrl(url, 'f_auto,q_auto,w_2400');
}
