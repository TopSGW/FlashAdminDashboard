/** @format */

import {
	configureStore,
	combineReducers,
	ThunkAction,
	Action,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import userSlice from './slice/userSlice';
import ordersSlice from './slice/ordersSlice';
import overviewSlice from './slice/overviewSlice';
import allTransactionSlice from './slice/allTransactionSlice';
import menubarSlice from './slice/menubarSlice';
import overviewAffiliatorSlice from './slice/overviewAffiliator';
import OverAffiliatorSlice from './slice/OverAffiliatorSlice';
import AuthSlice from './slice/authenticateSlice';
import billandInvoiceSlice from './slice/billandInvoiceSlice';
const rootReducer = combineReducers({
	orders: ordersSlice,
	user: userSlice,
	overview: overviewSlice,
	allTransaction: allTransactionSlice,
	menubar: menubarSlice,
	overviewAffiliator: overviewAffiliatorSlice,
	overAffiliator: OverAffiliatorSlice,
	auth: AuthSlice,
	billAndInvoice: billandInvoiceSlice,
});
const makeConfiguredStore = () =>
	configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'production',
	});
export const makeStore = () => {
	const isServer = typeof window === 'undefined';
	if (isServer) {
		return makeConfiguredStore();
	} else {
		// we need it only on client side

		const persistConfig = {
			key: 'nextjs',
			whitelist: [
				'orders',
				'overview',
				'allTransaction',
				'menubar',
				'overAffiliator',
				'overviewAffiliator',
				'auth',
				'billAndInvoice',
			], // make sure it does not clash with server keys
			storage,
		};

		const persistedReducer = persistReducer(persistConfig, rootReducer);
		let store: any = configureStore({
			reducer: persistedReducer,
			middleware: (getDefaultMiddleware) =>
				getDefaultMiddleware({
					serializableCheck: {
						ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
					},
				}),
			devTools: process.env.NODE_ENV !== 'production',
		});
		store.__persistor = persistStore(store); // Nasty hack
		return store;
	}
};
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<AppStore['getState']>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action
>;

export const wrapper = createWrapper(makeStore);
