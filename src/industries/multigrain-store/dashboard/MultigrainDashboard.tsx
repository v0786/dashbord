'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  ArrowRightLeft,
  Users,
  Truck,
  Receipt,
  Wallet,
  BarChart3,
  FileText,
  Calculator,
  Sparkles,
  Settings,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  Boxes,
} from 'lucide-react';
import { IndustryLayout } from '../components/IndustryLayout';
import { multigrainConfig } from '../config/multigrainConfig';
import type { DashboardMetrics } from '../types';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Sales', icon: ShoppingCart, href: '/sales' },
  { name: 'Outward Orders', icon: ArrowRightLeft, href: '/outward' },
  { name: 'Billing', icon: Receipt, href: '/billing' },
  { name: 'Inventory', icon: Package, href: '/inventory' },
  { name: 'Inward / Loading', icon: Truck, href: '/inward' },
  { name: 'Stock Movement', icon: Boxes, href: '/stock' },
  { name: 'Returns', icon: ArrowRightLeft, href: '/returns' },
  { name: 'Customers', icon: Users, href: '/customers' },
  { name: 'Suppliers', icon: Truck, href: '/suppliers' },
  { name: 'Finance', icon: Wallet, href: '/finance' },
  { name: 'Expenses', icon: DollarSign, href: '/expenses' },
  { name: 'Reports', icon: BarChart3, href: '/reports' },
  { name: 'Tax / GST', icon: Calculator, href: '/tax' },
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
      className={`card ${large ? 'col-span-2 row-span-2' : ''}`}
      style={{ padding: '20px' }}
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

function BestSellersCard() {
  const products = [
    { name: 'Organic Wheat Flour', sales: 245, revenue: '₹24,500' },
    { name: 'Basmati Rice Premium', sales: 189, revenue: '₹56,700' },
    { name: 'Mixed Dal 1kg', sales: 167, revenue: '₹14,020' },
    { name: 'Quinoa Organic', sales: 98, revenue: '₹19,600' },
  ];

  return (
    <div className="card" style={{ padding: '20px' }}>
      <div className="card-heading">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TrendingUp size={18} color="#1d7347" />
          Best Sellers
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {products.map((product, i) => (
          <div
            key={product.name}
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
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background:
                  i === 0
                    ? '#D4A84B'
                    : i === 1
                      ? '#8B6914'
                    : i === 2
                      ? '#C9A227'
                    : '#E0C56E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              {i + 1}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>
                {product.name}
              </div>
              <div style={{ fontSize: '11px', color: '#7c847e' }}>
                {product.sales} units sold
              </div>
            </div>
            <div style={{ fontWeight: '500', color: '#1d7347' }}>
              {product.revenue}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LowStockCard() {
  const items = [
    { name: 'Organic Oats', stock: 5, reorder: 20 },
    { name: 'Chia Seeds', stock: 3, reorder: 15 },
    { name: 'Flaxseed Oil', stock: 2, reorder: 10 },
  ];

  return (
    <div className="card" style={{ padding: '20px', borderLeft: '3px solid #d88e87' }}>
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
          Low Stock Alert
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px',
              background: '#fcebef',
              borderRadius: '8px',
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: '500' }}>{item.name}</div>
              <div style={{ fontSize: '11px', color: '#bd3b47' }}>
                Only {item.stock} units left (Reorder: {item.reorder})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIRecommendationsCard() {
  const recommendations = [
    'Reorder Organic Wheat Flour - trending up 15%',
    'Offer discount on slow-moving Quinoa stock',
    'Follow up with Silver Trading Co. for payment',
    'Increase price of Premium Basmati Rice by 5%',
  ];

  return (
    <div
      className="card"
      style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #062a1a 0%, #0d3924 100%)',
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
            <span style={{ color: '#7bd9a0' }}>{i + 1}.</span>
            <span>{rec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MultigrainDashboard() {
  return (
    <IndustryLayout
      industry={multigrainConfig}
      navigation={navigation}
    >
      <div className="page-heading">
        <div>
          <h1>Multigrain Store Dashboard</h1>
          <p>Track sales, inventory, and business health in real-time</p>
        </div>
        <div className="heading-actions">
          <button
            className="primary"
            style={{
              background: 'linear-gradient(180deg, #8B6914, #5D470D)',
            }}
          >
            <ShoppingCart size={18} />
            New Sale
          </button>
          <button className="outline">
            <FileText size={18} />
            Generate Report
          </button>
        </div>
      </div>

      <div
        className="stats"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '20px' }}
      >
        <MetricCard
          title="Today's Sales"
          value="₹47,250"
          trend="12% vs yesterday"
          trendUp={true}
          icon={ShoppingCart}
          iconColor="#8B6914"
        />
        <MetricCard
          title="Today's Orders"
          value="23"
          trend="5% vs yesterday"
          trendUp={true}
          icon={Package}
          iconColor="#D4A84B"
        />
        <MetricCard
          title="Gross Profit"
          value="₹12,840"
          trend="8% vs yesterday"
          trendUp={true}
          icon={TrendingUp}
          iconColor="#1d7347"
        />
        <MetricCard
          title="Expenses"
          value="₹8,450"
          trend="2% vs yesterday"
          trendUp={false}
          icon={Wallet}
          iconColor="#bd3b47"
        />
      </div>

      <div
        className="stats"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '20px' }}
      >
        <MetricCard
          title="Estimated Profit"
          value="₹4,390"
          trend="15% margin"
          trendUp={true}
          icon={DollarSign}
          iconColor="#4A7C59"
        />
        <MetricCard
          title="Stock Value"
          value="₹4,25,000"
          subtitle="Across 156 products"
          icon={Boxes}
          iconColor="#6B8E23"
        />
        <MetricCard
          title="Low Stock"
          value="8 items"
          subtitle="Need immediate reorder"
          icon={AlertTriangle}
          iconColor="#d88e87"
        />
        <MetricCard
          title="Outstanding"
          value="₹67,890"
          subtitle="From 23 customers"
          icon={Receipt}
          iconColor="#7B68EE"
        />
      </div>

      <div
        className="dashboard-grid"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '16px',
        }}
      >
        <BestSellersCard />
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '15px' }}>Sales Trend</h3>
          <div
            style={{
              background: 'var(--card)',
              borderRadius: '20px',
              padding: '20px',
              height: '200px',
              display: 'flex',
              alignItems: 'end',
              gap: '8px',
            }}
          >
            {[40, 55, 45, 70, 60, 80, 75, 85, 90, 72, 88, 95].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background:
                    i === 11
                      ? '#8B6914'
                    : i === 10
                      ? '#D4A84B'
                    : '#e4e7e3',
                  borderRadius: '4px',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '15px' }}>Profit Trend</h3>
          <div
            style={{
              background: 'var(--card)',
              borderRadius: '20px',
              padding: '20px',
              height: '200px',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B6914" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#8B6914" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 80 Q30 70 60 75 T120 60 T180 50 T240 55 T300 40 V100 H0 Z"
                fill="url(#profitGradient)"
              />
              <path
                d="M0 80 Q30 70 60 75 T120 60 T180 50 T240 55 T300 40"
                fill="none"
                stroke="#8B6914"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <LowStockCard />
        <AIRecommendationsCard />
      </div>
    </IndustryLayout>
  );
}
