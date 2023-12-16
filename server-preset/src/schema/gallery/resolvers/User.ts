import type { UserResolvers } from "./../../types.generated";
export const User: Pick<UserResolvers, "gallery"> = {
  /* Implement User resolver logic here */
  gallery: () => {
    /* User.gallery resolver is required because User.gallery exists but UserMapper.gallery does not */
  },
};
