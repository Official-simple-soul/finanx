import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useMutation } from '@tanstack/react-query';
import { auth, db } from '../../firebase';
import { showNotification } from '@mantine/notifications';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const useCreateUser = () => {
  return useMutation({
    mutationFn: async ({ email, password, fullName, phone, terms }) => {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        email,
        fullName,
        phone,
        terms,
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
