import { OrderAttributes } from '../../models/order';
import { CustomerAttributes } from '../../models/customer';
import { OrderLineAttributes } from '../../models/orderLine';

export const buildOrderModel = (order: any) => {
	const orderModel = {} as OrderAttributes &
	{ customer: CustomerAttributes;
		statusId: number;
		companyId: number;
		customerId: number;
		paymentMethodId: number;
		orderLines: Array<any>;
	};
	orderModel.id = order.Id;
	orderModel.currency = order?.Currency?.Iso;
	orderModel.customerComment = order?.CustomerComment;
	orderModel.deliveryAddress = order?.Customer?.ShippingAddress;
	orderModel.deliveryCost = order?.Delivery?.Price;
	orderModel.deliveryCountry = order?.Customer?.ShippingCountry;
	orderModel.deliveryMethod = order?.Delivery?.ServiceType;
	orderModel.deliveryName = order?.Delivery?.Title;
	orderModel.deliveryZipCode = order?.Customer?.ShippingZip;
	orderModel.dueDate = order?.DateDue;
	orderModel.invoiceNumber = order?.InvoiceNumber;
	orderModel.iso = order?.LanguageIso;
	orderModel.orderComment = order?.OrderComment;
	orderModel.vat = order?.Vat;
	orderModel.orderDate = order?.DateSent;
	orderModel.orderUpdatedDate = order?.DateUpdated;
	orderModel.orderFulfilledDate = order?.DateDeliverd;
	orderModel.statusId = parseInt(order?.Status);
	orderModel.companyId = 1;
	orderModel.paymentMethodId = order?.Payment?.PaymentMethodId;
	orderModel.customerId = order?.Customer?.Id;

	const custModel = {} as CustomerAttributes;
	custModel.id = order?.Customer?.Id;
	custModel.address1 = order?.Customer?.Address;
	custModel.address2 = order?.Customer?.Address2;
	custModel.city = order?.Customer?.City;
	custModel.country = order?.Customer?.Country;
	custModel.countryCode = order?.Customer?.CountryCode;
	custModel.email = order?.Customer?.Email;
	custModel.firstName = order?.Customer?.Firstname;
	custModel.lastName = order?.Customer?.Lastname;
	custModel.mobile = order?.Customer?.Mobile ?? (order?.Customer?.Phone ?? '');
	custModel.zipCode = order?.Customer?.Zip;

	orderModel.customer = custModel;
	const orderLineItems = order?.OrderLines?.item ?? [];
	orderModel.orderLines = orderLineItems.map((lineItem) => {
		const lineItemModel = {} as OrderLineAttributes & { orderId: number};
		lineItemModel.id = lineItem.Id;
		lineItemModel.amount = lineItem.Amount;
		lineItemModel.discount = lineItem.Discount ? lineItem.Discount * 100 : 0;
		lineItemModel.price = lineItem.Price ? lineItem.Price * 100 : 0;
		lineItemModel.itemNumber = lineItem.ItemNumber;
		lineItemModel.orderId = order?.Id;
		return lineItemModel;
	});

	return orderModel;
};
