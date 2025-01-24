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
  Center,
  Modal,
} from '@mantine/core';
import {
  IconPlus,
  IconWallet,
  IconArrowRight,
  IconHistory,
} from '@tabler/icons-react';
import { DashboardLayout } from './DashboardLayout';
import { recentTransactions, userBalance } from '../data/dashboardData';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { IconGift } from '@tabler/icons-react';
import { IconAward } from '@tabler/icons-react';

function Dashboard() {
  const [claimRewardModal, setClaimRewardModal] = useState(true);

  const handleClaimReward = () => {
    setClaimRewardModal(false);
  };

  return (
    <DashboardLayout>
      <div>
        <Card shadow="md" radius="sm" withBorder mb="lg">
          <Group position="apart">
            <Title order={3}>Balance</Title>
            <Badge size="lg" color="blue">
              Web3 Wallet
            </Badge>
          </Group>
          <Text align="left" mt="md" size="xl" weight="bolder">
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
                    <th className="text-left hidden md:block">
                      Transaction ID
                    </th>
                    <th className="text-left">Type</th>
                    <th className="text-left">Amount</th>
                    <th className="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((tx) => (
                    <tr key={tx.id}>
                      <td className="hidden md:block">{tx.id}</td>
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
                  leftSection={<IconPlus />}
                  color="green"
                >
                  Add Liquidity
                </Button>
                <Button
                  radius="md"
                  variant="light"
                  leftSection={<IconWallet />}
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

      <Modal
        opened={claimRewardModal}
        onClose={() => setClaimRewardModal(false)}
        title={
          <Group>
            <IconGift size={24} />
            <Text size="lg" weight={600}>
              Claim Your Reward!
            </Text>
          </Group>
        }
        centered
        radius="md"
      >
        <Center>
          <IconAward size={100} color="green" />
        </Center>
        <Text align="center" color="dimmed">
          Congratulations! You are eligible for a special reward. Claim it now
          to unlock exclusive benefits and perks for your Web3 journey.
        </Text>
        <Group position="center" mt="lg">
          <Button
            onClick={handleClaimReward}
            leftSection={<IconCheck />}
            size="md"
            radius="md"
            color="green"
          >
            Claim Reward
          </Button>
          <Button
            onClick={() => setClaimRewardModal(false)}
            variant="outline"
            size="md"
            radius="md"
          >
            Maybe Later
          </Button>
        </Group>
      </Modal>
    </DashboardLayout>
  );
}

export default Dashboard;
