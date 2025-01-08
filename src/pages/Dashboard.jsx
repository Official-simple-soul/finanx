import {
  Card,
  Button,
  Grid,
  Title,
  Text,
  Table,
  Badge,
  Group,
  Progress,
} from '@mantine/core';
import {
  IconPlus,
  IconWallet,
  IconArrowRight,
  IconHistory,
} from '@tabler/icons-react';
import { DashboardLayout } from './DashboardLayout';

function Dashboard() {
  const userBalance = '2.45 ETH';
  const recentTransactions = [
    {
      id: '0x1a2b3c',
      type: 'Received',
      amount: '1.00 ETH',
      status: 'Success',
      timestamp: '2023-12-31 10:23',
    },
    {
      id: '0x4d5e6f',
      type: 'Sent',
      amount: '0.25 ETH',
      status: 'Pending',
      timestamp: '2023-12-30 16:45',
    },
    {
      id: '0x7g8h9i',
      type: 'Top-Up',
      amount: '0.50 ETH',
      status: 'Success',
      timestamp: '2023-12-30 14:10',
    },
  ];

  return (
    <DashboardLayout>
      <div>
        {/* User Balance Section */}
        <Card shadow="md" radius="sm" withBorder mb="lg">
          <Group position="apart">
            <Title order={3}>Balance</Title>
            <Badge size="lg" color="blue">
              Web3 Wallet
            </Badge>
          </Group>
          <Text align="center" mt="md" size="xl" weight="bold">
            {userBalance}
          </Text>
          <Group position="center" mt="lg">
            <Button leftSection={<IconWallet />} color="blue" radius="md">
              Send
            </Button>
            <Button leftSection={<IconPlus />} color="green" radius="md">
              Top Up
            </Button>
          </Group>
        </Card>

        <Grid gutter="md">
          {/* Recent Transactions Section */}
          <Grid.Col span={12} md={6}>
            <Card shadow="md" radius="sm" withBorder>
              <Title order={4} mb="sm">
                Recent Transactions
              </Title>
              <Table highlightOnHover>
                <thead>
                  <tr>
                    <th className="text-left">Transaction ID</th>
                    <th className="text-left">Type</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id}>
                      <td>{tx.id}</td>
                      <td>{tx.type}</td>
                      <td>{tx.amount}</td>
                      <td>
                        <Badge
                          color={tx.status === 'Success' ? 'green' : 'yellow'}
                        >
                          {tx.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button
                fullWidth
                mt="md"
                rightSection={<IconHistory />}
                variant="light"
                color="gray"
              >
                View All Transactions
              </Button>
            </Card>
          </Grid.Col>

          {/* Web3 Portfolio Section */}
          <Grid.Col span={12} md={6}>
            <Card shadow="md" radius="sm" withBorder>
              <Title order={4} mb="sm">
                Your Portfolio
              </Title>
              <Text>Your staking performance and tokens:</Text>
              <Progress value={60} label="Staking Rewards (60%)" mt="md" />
              <Progress
                value={30}
                label="NFT Holdings (30%)"
                mt="sm"
                color="blue"
              />
              <Progress
                value={10}
                label="Liquidity Pool (10%)"
                mt="sm"
                color="green"
              />
              <Button
                fullWidth
                mt="lg"
                rightSection={<IconArrowRight />}
                variant="light"
                color="blue"
              >
                Manage Portfolio
              </Button>
            </Card>
          </Grid.Col>
        </Grid>

        <Grid gutter="md" mt="lg">
          {/* Additional Features Section */}
          <Grid.Col span={12} md={6}>
            <Card shadow="md" radius="sm" withBorder>
              <Title order={4} mb="sm">
                Quick Actions
              </Title>
              <Group position="center" mt="lg">
                <Button
                  radius="md"
                  variant="light"
                  leftIcon={<IconPlus />}
                  color="green"
                >
                  Add Liquidity
                </Button>
                <Button
                  radius="md"
                  variant="light"
                  leftIcon={<IconWallet />}
                  color="blue"
                >
                  Withdraw Funds
                </Button>
              </Group>
              <Text align="center" mt="lg" size="sm" color="dimmed">
                Seamlessly manage your Web3 assets with quick actions.
              </Text>
            </Card>
          </Grid.Col>

          {/* News and Updates Section */}
          <Grid.Col span={12} md={6}>
            <Card shadow="md" radius="sm" withBorder>
              <Title order={4} mb="sm">
                Web3 News & Updates
              </Title>
              <Text size="sm" color="dimmed">
                Stay updated with the latest Web3 trends:
              </Text>
              <ul style={{ marginTop: '10px' }}>
                <li>
                  <Text size="sm">
                    <strong>Ethereum 2.0 Launch:</strong> The merge is complete,
                    and staking is live.
                  </Text>
                </li>
                <li>
                  <Text size="sm">
                    <strong>New NFT Collections:</strong> Check out the latest
                    drops.
                  </Text>
                </li>
                <li>
                  <Text size="sm">
                    <strong>DeFi Yield Opportunities:</strong> Earn more with
                    decentralized finance.
                  </Text>
                </li>
              </ul>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
