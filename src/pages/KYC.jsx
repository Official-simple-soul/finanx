import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Select,
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
      idNumber: '',
      idType: '',
      idCard: null,
    },

    validate: {
      idNumber: (value) =>
        value.trim().length > 0 ? null : 'ID Number is required',
      idType: (value) => (value ? null : 'ID Type is required'),
      idCard: (value) => (value ? null : 'Please upload your ID card'),
    },
  });
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setIsUploading(true);
    try {
      const base64Image = await convertToBase64(values.idCard);

      // Save KYC data with Base64 image
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        kyc: {
          idNumber: values.idNumber,
          idType: values.idType,
          idCardBase64: base64Image,
        },
      });
      localStorage.setItem('token', auth.currentUser.getIdToken());

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
            label="ID Number"
            placeholder="Enter your ID number"
            {...form.getInputProps('idNumber')}
            withAsterisk
          />
          <Select
            label="ID Type"
            placeholder="Select your ID type"
            mt="md"
            data={[
              { value: 'passport', label: 'Passport' },
              { value: 'national_id', label: 'National ID' },
              { value: 'driver_license', label: "Driver's License" },
            ]}
            {...form.getInputProps('idType')}
            withAsterisk
          />
          <FileInput
            label="Upload ID Card"
            placeholder="Upload your ID card"
            mt="md"
            accept="image/*"
            {...form.getInputProps('idCard')}
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
