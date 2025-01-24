import { AppShell, Burger, Group, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink, useLocation } from 'react-router';
import {
  IconHome,
  IconSettings,
  IconUser,
  IconChartBar,
  IconLogout,
} from '@tabler/icons-react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { useApp } from '../context/AppStore';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

export function DashboardLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();
  const { setUserToken, userProfile, setUserProfile } = useApp();
  const location = useLocation();

  const sidebarItems = [
    { label: 'Dashboard', path: '/dashboard', icon: <IconHome size={20} /> },
    { label: 'Settings', path: '/settings', icon: <IconSettings size={20} /> },
    { label: 'Profile', path: '/profile', icon: <IconUser size={20} /> },
    {
      label: 'Analytics',
      path: '/analytics',
      icon: <IconChartBar size={20} />,
    },
  ];

  const logout = () => {
    signOut(auth);
    sessionStorage.removeItem('token');
    window.location.replace = '/';
    setUserToken(null);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        return null;
      }

      const docRef = doc(db, 'users', currentUser.uid);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
          return docSnap.data();
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
    };
    fetchProfile();
  }, [auth]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      styles={{
        navbar: {
          backgroundColor: '#f5f7fa',
        },
        main: {
          backgroundColor: '#f9fafb',
        },
      }}
    >
      {/* Header */}
      <AppShell.Header>
        {/* <Group h="100%" px="md"> */}
        <div className="flex p-4 justify-between w-full">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="flex items-center justify-between md:w-full">
            <h1 className="text-2xl font-bold text-dark-blue hidden md:block">
              Dashboard
            </h1>
            <div className="flex items-center gap-3">
              <IconUser />
              <h1 className="text-xl text-dark-blue">
                Hi, {userProfile?.fullName?.split(' ')?.[0]}
              </h1>
            </div>
          </div>
        </div>
        {/* </Group> */}
      </AppShell.Header>

      {/* Sidebar with Tabler Icons */}
      <AppShell.Navbar styles={{ backgroundColor: '#ffffff' }}>
        <Box>
          {sidebarItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 py-4 px-6 my-2 transition-all ease-in-out`}
              style={{
                color: location.pathname === item.path ? '#ffffff' : '#333',
                backgroundColor:
                  location.pathname === item.path ? '#007bff' : 'transparent',
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          <div className=" h-full flex items-end">
            <NavLink
              className={`flex items-center gap-4 py-4 px-6 my-2 transition-all ease-in-out`}
              style={{
                color: 'red',
                backgroundColor:
                  location.pathname === '/logout' ? '#007bff' : 'transparent',
              }}
              onClick={logout}
            >
              <IconLogout size={20} />
              Logout
            </NavLink>
          </div>
        </Box>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
