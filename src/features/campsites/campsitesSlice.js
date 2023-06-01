//doesn't export react components

import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
};
