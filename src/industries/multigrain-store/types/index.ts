export interface Product {
  id: string;
  name: string;
  sku: string;
  barcode?: string;
  category: string;
  unit: string;
  purchasePrice: number;
  sellingPrice: number;
  taxRate: number;
  reorderLevel: number;
  currentStock: number;
  active: boolean;
}

export interface ProductBatch {
  id: string;
  productId: string;
  batchNo: string;
  expiryDate?: string;
  purchaseRate: number;
  quantity: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  creditLimit: number;
  outstandingAmount: number;
  active: boolean;
}

export interface Supplier {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  gstin?: string;
}

export interface SalesOrder {
  id: string;
  orderNo: string;
  customerId: string;
  customerName: string;
  status: 'draft' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  paid: number;
  due: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  orderDate: string;
  dueDate?: string;
  items: SalesOrderItem[];
}

export interface SalesOrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  lineTotal: number;
}

export interface PurchaseReceipt {
  id: string;
  receiptNo: string;
  supplierId: string;
  supplierName: string;
  invoiceNo: string;
  receiptDate: string;
  subtotal: number;
  tax: number;
  charges: number;
  total: number;
  paymentStatus: 'pending' | 'partial' | 'paid';
  items: PurchaseItem[];
}

export interface PurchaseItem {
  id: string;
  productId: string;
  batchId?: string;
  quantity: number;
  purchaseRate: number;
  tax: number;
  lineTotal: number;
}

export interface InventoryMovement {
  id: string;
  productId: string;
  productName: string;
  movementType: 'inward' | 'outward' | 'return' | 'adjustment';
  quantity: number;
  unit: string;
  referenceType: 'purchase' | 'sale' | 'return' | 'adjustment';
  referenceId: string;
  reason?: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  orderId: string;
  customerName: string;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  invoiceDate: string;
  dueDate: string;
}

export interface Payment {
  id: string;
  referenceType: 'invoice' | 'purchase' | 'expense';
  referenceId: string;
  method: 'cash' | 'card' | 'upi' | 'bank_transfer' | 'cheque';
  amount: number;
  transactionReference?: string;
  paidAt: string;
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  tax: number;
  paymentMethod: string;
  expenseDate: string;
  notes?: string;
}

export interface DashboardMetrics {
  todaysSales: number;
  todaysOrders: number;
  grossProfit: number;
  expenses: number;
  estimatedProfit: number;
  stockValue: number;
  lowStockCount: number;
  outstandingPayments: number;
}
