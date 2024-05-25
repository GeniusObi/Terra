import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.myprojects.Terra',
  projectId: '6632e44f000027f044dd',
  databaseId: '6632e676002999bff745',
  userCollectionId: '6632e6ca002893068824',
  videoCollectionId: '6632e729003a1bf5f30f',
  storageId: '6632ebbe0030276050b7',
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async () => {
  try {
    const newAccount = await account.create(ID.unique(), email, password);
    if (newAccount) {
      console.log('Account created', newAccount);
    }
    if (!newAccount) throw new Error('Account not created');
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      appwriteConfig.userCollectionId,
      appwriteConfig.databaseId,
      {
        acouiuntId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createSession(email, password);
    // if (session) {
    //   console.log('Session created', session);
    // }
    // if (!session) throw new Error('Session not created');
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
