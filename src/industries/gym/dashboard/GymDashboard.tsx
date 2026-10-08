'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  Dumbbell,
  ClipboardList,
  Clock,
  Receipt,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Zap,
  Star,
  Award,
  Activity,
  CreditCard,
  Sparkles,
  Settings,
  UserPlus,
  Flame,
} from 'lucide-react';
import { IndustryLayout } from '../components/IndustryLayout';
import { gymConfig } from '../config/gymConfig';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Members', icon: Users, href: '/members' },
  { name: 'Memberships', icon: CreditCard, href: '/memberships' },
  { name: 'Plans', icon: Award, href: '/plans' },
  { name: 'Trainers', icon: Dumbbell, href: '/trainers' },
  { name: 'Attendance', icon: Activity, href: '/attendance' },
  { name: 'Appointments', icon: Calendar, href: '/appointments' },
  { name: 'Classes', icon: ClipboardList, href: '/classes' },
  { name: 'Payments', icon: Receipt, href: '/payments' },
  { name: 'Expenses', icon: TrendingDown, href: '/expenses' },
  { name: 'Reports', icon: TrendingUp, href: '/reports' },
  { name: 'CRM', icon: Users, href: '/crm' },
  { name: 'AI Advisor', icon: Sparkles, href: '/ai' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

function MetricCard({
  title,
  value,
  subtitle,
  trend,
  trendUp,
  icon: Icon,
  iconColor,
  large = false,
}: {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  trendUp?: boolean;
  icon: React.ElementType;
  iconColor: string;
  large?: boolean;
}) {
  return (
    <div
      className="card"
      style={{
        padding: '20px',
        ...(large && { gridColumn: 'span 2', gridRow: 'span 2' }),
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: iconColor,
            color: 'white',
          }}
        >
          <Icon size={20} />
        </div>
        <span style={{ fontSize: '13px', color: '#7c847e' }}>{title}</span>
      </div>
      <div
        style={{
          fontSize: large ? '36px' : '28px',
          fontWeight: '600',
          letterSpacing: '-1px',
        }}
      >
        {value}
      </div>
      {subtitle && (
        <div style={{ fontSize: '12px', color: '#7c847e', marginTop: '8px' }}>
          {subtitle}
        </div>
      )}
      {trend && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '8px',
            fontSize: '12px',
            color: trendUp ? '#1d7347' : '#bd3b47',
          }}
        >
          {trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {trend}
        </div>
      )}
    </div>
  );
}

function TrainerCard() {
  const trainers = [
    { name: 'Alex Johnson', sessions: 48, rating: 4.9, revenue: '₹72,000' },
    { name: 'Sarah Williams', sessions: 42, rating: 4.8, revenue: '₹63,000' },
    { name: 'Mike Chen', sessions: 36, rating: 4.7, revenue: '₹54,000' },
  ];

  return (
    <div className="card" style={{ padding: '20px' }}>
      <div className="card-heading">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Star size={18} color="#FF6B35" />
          Top Trainers
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {trainers.map((trainer, i) => (
          <div
            key={trainer.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f5f6f5',
              borderRadius: '10px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background:
                  i === 0 ? '#FF6B35' : i === 1 ? '#FF8C42' : '#FFB088',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              {trainer.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>
                {trainer.name}
              </div>
              <div style={{ fontSize: '11px', color: '#7c847e' }}>
                {trainer.sessions} sessions this month
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: '500', color: '#FF6B35' }}>
                {trainer.revenue}
              </div>
              <div style={{ fontSize: '11px', color: '#1d7347' }}>
                ⭐ {trainer.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopularPlansCard() {
  const plans = [
    { name: 'Annual Premium', members: 245, revenue: '₹12,25,000' },
    { name: '6 Month Standard', members: 178, revenue: '₹4,45,000' },
    { name: '3 Month Basic', members: 92, revenue: '₹92,000' },
  ];

  return (
    <div className="card" style={{ padding: '20px' }}>
      <div className="card-heading">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={18} color="#FF6B35" />
          Popular Plans
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 12px',
              background: '#f5f6f5',
              borderRadius: '8px',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>
                {plan.name}
              </div>
              <div style={{ fontSize: '11px', color: '#7c847e' }}>
                {plan.members} active members
              </div>
            </div>
            <div style={{ fontWeight: '500', color: '#1d7347' }}>
              {plan.revenue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpiringMembershipsCard() {
  const expiring = [
    { name: 'Rahul Sharma', expiry: '2 days', plan: 'Annual Premium' },
    { name: 'Priya Patel', expiry: '5 days', plan: 'Monthly' },
    { name: 'Amit Kumar', expiry: '7 days', plan: '6 Month Standard' },
    { name: 'Neha Gupta', expiry: '10 days', plan: 'Quarterly' },
  ];

  return (
    <div
      className="card"
      style={{
        padding: '20px',
        borderLeft: '3px solid #d88e87',
      }}
    >
      <div className="card-heading">
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#bd3b47',
          }}
        >
          <AlertTriangle size={18} />
          Expiring Soon
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {expiring.map((member) => (
          <div
            key={member.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px',
              background: '#fcebef',
              borderRadius: '8px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#FFD4D4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              {member.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>
                {member.name}
              </div>
              <div style={{ fontSize: '11px', color: '#7c847e' }}>
                {member.plan}
              </div>
            </div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: '#bd3b47',
              }}
            >
              {member.expiry}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIRecommendationsCard() {
  const recommendations = [
    'Offer 20% discount to 3 expiring members this week',
    'Schedule more evening slots - demand is 40% higher',
    'Alex Johnson is reaching capacity - consider hiring',
    'Engage 12 inactive members with personalized offers',
  ];

  return (
    <div
      className="card"
      style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #1a2a1a 0%, #0d2924 100%)',
        color: '#f1f7f2',
      }}
    >
      <div className="card-heading">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f1f7f2' }}>
          <Sparkles size={18} />
          AI Business Advisor
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {recommendations.map((rec, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '12px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '10px',
              fontSize: '13px',
            }}
          >
            <span style={{ color: '#FF8C42' }}>{i + 1}.</span>
            <span>{rec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TodaysClassesCard() {
  const classes = [
    { name: 'Morning Yoga', time: '06:00 AM', trainer: 'Sarah', enrolled: 12, capacity: 20 },
    { name: 'HIIT Blast', time: '09:00 AM', trainer: 'Alex', enrolled: 18, capacity: 25 },
    { name: 'Strength Training', time: '06:00 PM', trainer: 'Mike', enrolled: 8, capacity: 15 },
  ];

  return (
    <div className="card" style={{ padding: '20px' }}>
      <div className="card-heading">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={18} color="#FF6B35" />
          Today&apos;s Classes
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {classes.map((cls) => (
          <div
            key={cls.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f5f6f5',
              borderRadius: '10px',
            }}
          >
            <Flame size={20} color="#FF6B35" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>
                {cls.name}
              </div>
              <div style={{ fontSize: '11px', color: '#7c847e' }}>
                {cls.time} · {cls.trainer}
              </div>
            </div>
            <div
              style={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '6px',
                background:
                  cls.enrolled / cls.capacity > 0.8
                    ? '#fcebef'
                    : '#e4f1e8',
                color:
                  cls.enrolled / cls.capacity > 0.8
                    ? '#bd3b47'
                    : '#1d7347',
              }}
            >
              {cls.enrolled}/{cls.capacity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GymDashboard() {
  const [memberChart, setMemberChart] = useState<number[]>([65, 68, 72, 70, 75, 78, 80, 82, 85, 88, 92, 95]);

  return (
    <IndustryLayout industry={gymConfig} navigation={navigation}>
      <div className="page-heading">
        <div>
          <h1>Gym Dashboard</h1>
          <p>Manage members, trainers, and fitness operations</p>
        </div>
        <div className="heading-actions">
          <button
            className="primary"
            style={{
              background: 'linear-gradient(180deg, #FF6B35, #E55A2B)',
            }}
          >
            <UserPlus size={18} />
            New Member
          </button>
          <button className="outline">
            <Activity size={18} />
            Mark Attendance
          </button>
        </div>
      </div>

      <div
        className="stats"
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          marginBottom: '20px',
        }}
      >
        <MetricCard
          title="Active Members"
          value="485"
          trend="12% vs last month"
          trendUp={true}
          icon={Users}
          iconColor="#FF6B35"
        />
        <MetricCard
          title="New This Month"
          value="28"
          trend="5% vs last month"
          trendUp={true}
          icon={UserPlus}
          iconColor="#FF8C42"
        />
        <MetricCard
          title="Expiring Soon"
          value="12"
          subtitle="Next 7 days"
          icon={AlertTriangle}
          iconColor="#d88e87"
        />
        <MetricCard
          title="Today's Check-ins"
          value="167"
          trend="8% vs yesterday"
          trendUp={true}
          icon={Activity}
          iconColor="#1d7347"
        />
        <MetricCard
          title="Monthly Revenue"
          value="₹4.2L"
          trend="15% vs last month"
          trendUp={true}
          icon={TrendingUp}
          iconColor="#4A7C59"
        />
      </div>

      <div
        className="stats"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          marginBottom: '20px',
        }}
      >
        <MetricCard
          title="Outstanding"
          value="₹67K"
          subtitle="From 23 members"
          icon={Receipt}
          iconColor="#7B68EE"
        />
        <MetricCard
          title="Retention Rate"
          value="87%"
          trend="Industry avg: 75%"
          trendUp={true}
          icon={Activity}
          iconColor="#6B8E23"
        />
        <MetricCard
          title="Churn Rate"
          value="3.2%"
          trend="Maintained low"
          trendUp={false}
          icon={TrendingDown}
          iconColor="#4A90A4"
        />
        <MetricCard
          title="Avg Member Value"
          value="₹25K"
          trend="per year"
          trendUp={true}
          icon={Zap}
          iconColor="#D4A84B"
        />
      </div>

      <div
        className="dashboard-grid"
        style={{
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '16px',
        }}
      >
        <div className="card" style={{ padding: '20px' }}>
          <div className="card-heading">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} color="#FF6B35" />
              Member Growth
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              gap: '8px',
              height: '200px',
              marginTop: '20px',
            }}
          >
            {memberChart.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background:
                    i === memberChart.length - 1
                      ? '#FF6B35'
                    : i === memberChart.length - 2
                      ? '#FF8C42'
                    : '#FFE5D9',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              fontSize: '11px',
              color: '#7c847e',
            }}
          >
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>

        <TrainerCard />
        <PopularPlansCard />
        <TodaysClassesCard />
        <ExpiringMembershipsCard />
        <AIRecommendationsCard />
      </div>
    </IndustryLayout>
  );
}
