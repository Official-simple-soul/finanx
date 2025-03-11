import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { auth, db } from '../../firebase';
import { showNotification } from '@mantine/notifications';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

const useCreateUser = () => {
  return useMutation({
    mutationFn: async ({ email, password, fullName, phone, terms }) => {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userRef = doc(db, 'users', user?.uid);
      await setDoc(userRef, {
        uid: user?.uid,
        email,
        fullName,
        phone,
        terms,
        balance: 35000,
        role: 'user',
        mainBalance: 0,
        createdAt: serverTimestamp(),
      });

      return user;
    },
  });
};

const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    },
  });
};

export const useGetUser = (id) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => fetchProfile(id)
  });
}

const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (email) => {
      await sendPasswordResetEmail(auth, email);
      return email; // Return email to confirm action
    },
    onSuccess: (email) => {
      showNotification({
        title: 'Password Reset Email Sent',
        message: `A password reset email has been sent to ${email}.`,
        color: 'green',
      });
    },
    onError: (error) => {
      showNotification({
        title: 'Error Sending Password Reset',
        message: error.message,
        color: 'red',
      });
    },
  });
};

export { useCreateUser, useLogin, useForgotPassword };

const fetchProfile = async (id) => {
  const docRef = doc(db, 'users', id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};