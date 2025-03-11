import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Group,
  Box,
  Container,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useCreateUser } from './service';
import { Link, NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

const SignUp = () => {
  const createUserMutation = useCreateUser();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },

    validate: {
      fullName: (value) =>
        value.trim().length > 0 ? null : 'Full name is required',
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email address',
      phone: (value) =>
        value.trim().length >= 10
          ? null
          : 'Phone number must be at least 10 digits',
      password: (value) =>
        value.trim().length >= 6
          ? null
          : 'Password must be at least 6 characters long',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
      terms: (value) =>
        value ? null : 'You must agree to the terms and conditions',
    },
  });
  const navigation = useNavigate();
  const handleSignup = async (values) => {
    setSubmitting(true);
    createUserMutation.mutate(values, {
      onSuccess: (user) => {
        showNotification({
          title: 'Account Created',
          message: `Welcome, ${user.email}! Your account has been created.`,
          color: 'green',
        });

        navigation('/kyc');
      },
      onError: (error) => {
        showNotification({
          title: 'Signup Failed',
          message: error.message,
          color: 'red',
        });
      },
      onSettled: () => {
        setSubmitting(false);
      },
    });
  };

  return (
    <Container size="xs" className="mt-20">
      <Link to={'/'}>
        <IconArrowNarrowLeft />
      </Link>
      <Box p="md" shadow="sm" radius="md" bg="white">
        <Title align="center" mb="xs">
          Create Your Account
        </Title>
        <Text align="center" color="dimmed" size="sm" mb="md">
          Join us and explore all features
        </Text>
        <form onSubmit={form.onSubmit(handleSignup)}>
          <TextInput
            label="Full Name"
            placeholder="John Doe"
            {...form.getInputProps('fullName')}
            withAsterisk
          />
          <TextInput
            label="Email Address"
            placeholder="example@example.com"
            mt="md"
            {...form.getInputProps('email')}
            withAsterisk
          />
          <TextInput
            label="Phone Number"
            placeholder="1234567890"
            mt="md"
            {...form.getInputProps('phone')}
            withAsterisk
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            {...form.getInputProps('password')}
            withAsterisk
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            mt="md"
            {...form.getInputProps('confirmPassword')}
            withAsterisk
          />
          <Checkbox
            label="I agree to the terms and conditions"
            mt="md"
            {...form.getInputProps('terms', { type: 'checkbox' })}
          />
          <Group position="center" mt="md">
            <Button
              type="submit"
              fullWidth
              loading={submitting}
              loaderProps={{ type: 'dots' }}
              color="blue"
            >
              Sign Up
            </Button>
          </Group>
        </form>
        <Text align="center" mt="md" size="sm">
          Already have an account?{' '}
          <Anchor component={NavLink} to="/login" color="blue">
            Sign In
          </Anchor>
        </Text>
      </Box>
    </Container>
  );
};

export default SignUp;
