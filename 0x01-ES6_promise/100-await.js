import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pm1 = await uploadPhoto();
    const pm2 = await createUser();

    return ({ photo: pm1, user: pm2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
