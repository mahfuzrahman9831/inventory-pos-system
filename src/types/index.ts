export type Role = 'ADMIN' | 'MANAGER' | 'STAFF'
export type PaymentType = 'CASH' | 'CARD' | 'MOBILE'
export type SaleStatus = 'COMPLETED' | 'REFUNDED' | 'PENDING'

export interface Category {
  id: string
  name: string
}

export interface Supplier {
  id: string
  name: string
  phone?: string
  email?: string
  address?: string
}

export interface Product {
  id: string
  name: string
  sku: string
  barcode?: string
  price: number
  costPrice: number
  stock: number
  minStock: number
  unit: string
  categoryId: string
  supplierId?: string
  category?: Category
  supplier?: Supplier
  createdAt: Date
}

export interface Customer {
  id: string
  name: string
  phone?: string
  email?: string
  address?: string
}

export interface CartItem {
  productId: string
  name: string
  price: number
  quantity: number
  total: number
}

export interface SaleItem {
  id: string
  productId: string
  quantity: number
  price: number
  total: number
  product?: Product
}

export interface Sale {
  id: string
  invoiceNo: string
  customerId?: string
  subtotal: number
  discount: number
  tax: number
  total: number
  paid: number
  change: number
  paymentType: PaymentType
  status: SaleStatus
  items: SaleItem[]
  createdAt: Date
}