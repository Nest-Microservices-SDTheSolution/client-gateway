export enum OrderStatus {
    PENDING = 'PENDING',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
    PROCESSING = 'PROCESSING',
    SHIPPED = 'SHIPPED'
}

export const OrderStatusList = [
    OrderStatus.PENDING,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELED,
    OrderStatus.PROCESSING,
    OrderStatus.SHIPPED
];