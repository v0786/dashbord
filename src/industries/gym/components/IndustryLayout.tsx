'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  LogOut,
  Search,
  Mail,
  Bell,
  Menu,
  X,
  Smartphone,
} from 'lucide-react';
import { IndustryConfig } from '@/core/registry/industryRegistry';
import BrandMark from '@/components/BrandMark';

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

interface IndustryLayoutProps {
  industry: IndustryConfig;
  navigation: NavItem[];
  children: React.ReactNode;
}

export default function IndustryLayout({
  industry,
  navigation,
  children,
}: IndustryLayoutProps) {
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [unread, setUnread] = useState(3);

  const handleLogout = () => {
    localStorage.removeItem('fernly-session');
    sessionStorage.removeItem('fernly-session');
    router.push('/login');
  };

  return (
    <div className="workspace">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <aside
        id="workspace-navigation"
        className={`sidebar ${sidebar ? 'open' : ''}`}
      >
        <button
          className="sidebar-close icon-button"
          aria-label="Close menu"
          onClick={() => setSidebar(false)}
        >
          <X size={20} />
        </button>

        <Link
          className="brand"
          href="/industry-selector"
          style={{ textDecoration: 'none' }}
        >
          <span className="brand-icon">
            <BrandMark />
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            🏋️ {industry.name}
          </span>
        </Link>

        <p className="nav-label">MENU</p>
        <nav aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/dashboard/${industry.slug}${item.href}`}
              style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
            >
              <item.icon size={19} />
              {item.name}
            </Link>
          ))}

          <button onClick={handleLogout} style={{ marginTop: '20px' }}>
            <LogOut size={19} />
            Logout
          </button>
        </nav>

        <div className="mobile-promo textured">
          <span className="phone">
            <Smartphone size={17} />
          </span>
          <h3>
            {industry.name}
            <br />
            Mobile App
          </h3>
          <p>Your business, in your pocket</p>
          <button>Download</button>
        </div>
      </aside>

      {sidebar && (
        <button
          className="sidebar-scrim"
          aria-label="Close navigation"
          onClick={() => setSidebar(false)}
        />
      )}

      <div className="workspace-body">
        <header className="topbar">
          <Link
            className="mobile-brand"
            href="/industry-selector"
            style={{ textDecoration: 'none' }}
          >
            <BrandMark size={24} />
            🏋️ {industry.name}
          </Link>

          <button
            className="mobile-menu icon-button"
            aria-label={sidebar ? 'Close navigation' : 'Open navigation'}
            aria-expanded={sidebar}
            aria-controls="workspace-navigation"
            onClick={() => setSidebar(!sidebar)}
          >
            <Menu />
          </button>

          <div className="search-box">
            <Search size={20} />
            <input
              placeholder={`Search ${industry.name.toLowerCase()}...`}
              aria-label="Search"
            />
            <kbd>Ctrl K</kbd>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Messages">
              <Mail size={19} />
            </button>

            <div className="notification-wrap">
              <button
                className="icon-button"
                aria-label={`Notifications, ${unread} new`}
                onClick={() => setNotifications(!notifications)}
              >
                <Bell size={19} />
                {unread > 0 && <i />}
              </button>
              {notifications && (
                <div className="notification-panel">
                  <div className="card-heading">
                    <h2>Notifications</h2>
                    <button
                      className="text-button"
                      onClick={() => {
                        setUnread(0);
                      }}
                    >
                      Mark all read
                    </button>
                  </div>
                  {[
                    'New membership signed up - Rajesh',
                    'Sarah (trainer) marked session complete',
                    'Payment received from Amit Kumar',
                  ].map((n, i) => (
                    <button className="notification-item" key={n}>
                      <span className="notification-dot" />
                      {n}
                      <small>{i + 1}h ago</small>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="account" onClick={() => {}}>
              <span
                className="avatar small"
                style={{
                  background: industry.theme?.primary || '#1d7347',
                }}
              >
                GM
              </span>
              <span>
                <strong>Gym Manager</strong>
                <small>manager@gym.com</small>
              </span>
            </button>
          </div>
        </header>

        <main id="main" className="main">
          {children}
          <footer style={{ marginTop: '20px' }}>
            {industry.name} Dashboard · Multi-Industry Platform
          </footer>
        </main>
      </div>
    </div>
  );
}
