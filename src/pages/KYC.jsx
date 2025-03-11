import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Button,
  FileInput,
  Box,
  Container,
  Title,
  Text,
  Group,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { convertToBase64 } from '../../utils/convertToBase64';
import { useNavigate } from 'react-router';

const KYCScreen = () => {
  const [isUploading, setIsUploading] = useState(false);
  const form = useForm({
    initialValues: {
      ssnNumber: '',
      ssnCard: null,
    },

    validate: {
      ssnNumber: (value) =>
        value.trim().length > 0 ? null : 'SSN Number is required',
      ssnCard: (value) => (value ? null : 'Please upload your SSN card'),
    },
  });
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setIsUploading(true);
    try {
      const base64Image = await convertToBase64(values.ssnCard);

      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        kyc: {
          ssnNumber: values.ssnNumber,
          ssnCardBase64: base64Image,
        },
      });
      sessionStorage.setItem('token', auth.currentUser.getIdToken());

      showNotification({
        title: 'KYC Submitted',
        message: 'Your KYC details have been submitted successfully!',
        color: 'green',
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting KYC:', error);
      showNotification({
        title: 'Error',
        message: 'There was an error submitting your KYC. Please try again.',
        color: 'red',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Container size="xs" className="mt-20">
      <Box p="md" shadow="sm" radius="md" bg="white">
        <Title align="center" mb="xs">
          KYC Verification
        </Title>
        <Text align="center" color="dimmed" size="sm" mb="md">
          Provide your KYC details to verify your account
        </Text>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="SSN Number"
            placeholder="Enter your SSN number"
            {...form.getInputProps('ssnNumber')}
            withAsterisk
          />
          <FileInput
            label="Upload SSN Card"
            placeholder="Upload your SSN card"
            mt="md"
            accept="image/*"
            {...form.getInputProps('ssnCard')}
            withAsterisk
          />
          <Group position="center" mt="md">
            <Button type="submit" loading={isUploading} color="blue" fullWidth>
              Submit KYC
            </Button>
          </Group>
        </form>
      </Box>
    </Container>
  );
};

export default KYCScreen;
