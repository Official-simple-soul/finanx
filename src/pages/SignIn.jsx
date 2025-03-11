import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Group,
  Anchor,
  Box,
  Container,
  Title,
  Text,
} from '@mantine/core';
import { Link, NavLink, useNavigate } from 'react-router';
import { showNotification } from '@mantine/notifications';
import { useLogin } from './service';
import { useState } from 'react';
import { useApp } from '../context/AppStore';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

function SignIn() {
  const login = useLogin();
  const { setUserToken } = useApp();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : 'Invalid email address',
      password: (value) =>
        value.trim().length > 0 ? null : 'Password is required',
    },
  });

  const handleSignIn = (values) => {
    setProcessing(true);
    login.mutate(
      { email: values.email, password: values.password },
      {
        onSuccess: (user) => {
          sessionStorage.setItem('token', user?.accessToken);
          setUserToken(user?.accessToken);

          showNotification({
            title: 'Login Successful',
            message: 'Welcome back!',
            color: 'green',
          });
          navigate('/dashboard');
        },
        onError: (error) => {
          showNotification({
            title: 'Error Logging In',
            message: error.code.split('/')[1],
            color: 'red',
          });
        },
        onSettled: () => {
          setProcessing(false);
        },
      }
    );
  };

  return (
    <Container size="xs" className="mt-20">
      <Link to={'/'}>
        <IconArrowNarrowLeft />
      </Link>
      <Box p="md" shadow="sm" radius="md" bg="white">
        <Title align="center" mb="xs">
          Welcome Back
        </Title>
        <Text align="center" color="dimmed" size="sm" mb="md">
          Sign in to your account
        </Text>
        <form onSubmit={form.onSubmit(handleSignIn)}>
          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            name="email"
            {...form.getInputProps('email')}
            withAsterisk
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            mt="md"
            {...form.getInputProps('password')}
            withAsterisk
          />
          <Group position="apart" mt="md">
            <Checkbox
              label="Remember me"
              {...form.getInputProps('rememberMe', { type: 'checkbox' })}
            />
            <Anchor size="sm" href="#" color="blue">
              Forgot password?
            </Anchor>
          </Group>
          <Button
            type="submit"
            fullWidth
            mt="md"
            color="blue"
            loading={processing}
          >
            Sign In
          </Button>
        </form>
        <Text align="center" mt="md" size="sm">
          Don’t have an account?{' '}
          <Anchor component={NavLink} to="/signup" color="blue">
            Open Account
          </Anchor>
        </Text>
      </Box>
    </Container>
  );
}

export default SignIn;
