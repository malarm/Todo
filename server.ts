import app from './app';
import { initPevino } from './lib/pevino/pevino';
import { job } from './lib/sync/webShopSync';

app.listen(3090, async () => {
	// eslint-disable-next-line no-console
	console.log('Initializing Pevindo - started');
	await initPevino();
	console.log('Initializing Pevindo - Done');
	console.log('listening to port 3090....');
	job.start();
});
