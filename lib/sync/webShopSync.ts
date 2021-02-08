import { CronJob } from 'cron';
import { buildOrderModel } from '../pevino/pevinoHelper';
import { fetchLatestOrders } from '../pevino/pevino';
import db from '../../models/index';

export const syncOrdersByUpdated = async (dateToSync: string) => {
	const ordersResponse = await fetchLatestOrders(dateToSync);
	const orders: Array<any> = ordersResponse?.item?.map((itm: any) => buildOrderModel(itm)) ?? [];
	orders.forEach(async (ord) => {
		try {
			if (ord?.customer) {
				await db.customer.upsert(ord?.customer);
			}
			const [orderUpsertRes] = await db.order.upsert(ord);
			if (!orderUpsertRes.isNewRecord) {
				await db.orderLine.destroy({ where: { orderId: ord?.id } });
			}
        ord?.orderLines?.forEach(async (lineItem) => {
        	try {
        		await db.orderLine.upsert(lineItem);
        	} catch (err) {
        		console.error(err.stack);
        	}
        });
		} catch (err) {
			console.error(err.stack);
		}
	});
	return orders;
};

export const job = new CronJob('0 */3 * * * *', async () => {
	// const today = new Date().toISOString().slice(0, 10);
	// await syncOrders(today);
});
