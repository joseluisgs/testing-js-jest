export const snapShotObject = (geo) => ({
  id: geo.id,
  latitude: geo.latitude,
  longitude: geo.longitude,
  active: geo.active,
});
export const href = (link) => ({
  link: link.link,
});
