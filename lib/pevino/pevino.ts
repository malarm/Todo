import { createClientAsync } from 'soap';
import lodash from 'lodash';
import request from 'request';
import config from './pevinoConfig';

const orderFields = [
	'Id', 'Currency', 'CustomerComment', 'OrderLines', 'Customer', 'Status', 'Delivery', 'InvoiceNumber', 'LanguageISO', 'OrderComment', 'Vat', 'DateDelivered', 'DateUpdated', 'DateDue', 'DateSent', 'Payment'
];

const orderLineFields = [
	'Id', 'ItemNumber', 'Amount', 'Price', 'Discount',
];

let client;

export const initPevino = async () => {
	client = await createClientAsync(config.wsdl, {
		request: request.defaults({ jar: true })
	});

	await client.Solution_ConnectAsync({ Username: config.email, Password: config.password });
	await client.Solution_SetLanguageAsync({ LanguageISO: 'DK' });

	await client.Order_SetFieldsAsync({ Fields: lodash.join(orderFields, ',') });
	await client.Order_SetOrderLineFieldsAsync({ Fields: lodash.join(orderLineFields, ',') });
};

export const fetchLatestOrders = async (dateToFetch: string) => {
	const [response] = await client.Order_GetByDateUpdatedAsync({ Start: dateToFetch, End: dateToFetch });
	return response.Order_GetByDateUpdatedResult;
};
