import { AVATAR_TYPE } from "../components/constants";

export const generateRandomAvatarProp = () =>
  AVATAR_TYPE[Math.floor(Math.random() * AVATAR_TYPE.length)];
