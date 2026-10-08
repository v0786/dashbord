export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  address?: string;
  photoUrl?: string;
  joinedDate: string;
  status: 'active' | 'inactive' | 'expired' | 'banned';
  lastVisit?: string;
  totalVisits: number;
  notes?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: 'monthly' | 'quarterly' | 'half-yearly' | 'yearly';
  durationMonths: number;
  price: number;
  description?: string;
  features: string[];
  active: boolean;
  createdAt: string;
}

export interface Membership {
  id: string;
  memberId: string;
  planId: string;
  planName: string;
  startDate: string;
  endDate: string;
  amount: number;
  discount: number;
  finalAmount: number;
  status: 'active' | 'expired' | 'cancelled' | 'suspended';
  autoRenew: boolean;
  createdAt: string;
}

export interface Trainer {
  id: string;
  name: string;
  email: string;
  phone: string;
  photoUrl?: string;
  specialization: string[];
  experience: number;
  bio?: string;
  ratePerSession: number;
  availability: WeeklySchedule;
  active: boolean;
  rating: number;
  totalSessions: number;
}

export interface WeeklySchedule {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface AttendanceRecord {
  id: string;
  memberId: string;
  memberName: string;
  checkIn: string;
  checkOut?: string;
  duration?: number;
  date: string;
}

export interface ClassSchedule {
  id: string;
  name: string;
  description?: string;
  trainerId: string;
  trainerName: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  maxCapacity: number;
  enrolledCount: number;
  category: 'strength' | 'cardio' | 'yoga' | 'pilates' | 'hiit' | 'dance';
  level: 'beginner' | 'intermediate' | 'advanced';
  active: boolean;
}

export interface ClassBooking {
  id: string;
  classId: string;
  className: string;
  memberId: string;
  memberName: string;
  bookingDate: string;
  status: 'confirmed' | 'attended' | 'cancelled' | 'no-show';
  bookedAt: string;
}

export interface PersonalTrainingSession {
  id: string;
  memberId: string;
  memberName: string;
  trainerId: string;
  trainerName: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  amount: number;
}

export interface Payment {
  id: string;
  memberId: string;
  memberName: string;
  paymentType: 'membership' | 'personal_training' | 'class' | 'product' | 'other';
  referenceId?: string;
  amount: number;
  method: 'cash' | 'card' | 'upi' | 'bank_transfer';
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  transactionReference?: string;
  paidAt: string;
}

export interface Expense {
  id: string;
  category: 'equipment' | 'maintenance' | 'salary' | 'rent' | 'utilities' | 'marketing' | 'other';
  amount: number;
  description: string;
  expenseDate: string;
  paidTo?: string;
  receiptUrl?: string;
}

export interface GymDashboardMetrics {
  activeMembers: number;
  newMembersThisMonth: number;
  expiringMemberships: number;
  todaysAttendance: number;
  monthlyRevenue: number;
  outstandingPayments: number;
  avgMemberRetention: number;
  churnRate: number;
}

export interface TrainerPerformance {
  trainerId: string;
  trainerName: string;
  sessionsThisMonth: number;
  revenue: number;
  rating: number;
}
