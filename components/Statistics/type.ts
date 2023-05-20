/** @format */

export type TopAffiliatedType = {
	product: {
		img: string;
		name: string;
	};
	id: string;
	sold: number;
};

export type TopPairType = {
	product: {
		img: string;
		pairName: string;
	};
	order: number;
};

export type SalesGoalType = {
	total: number;
	current: number;
	rate: number;
	brandSales: {
		total: number;
		crypto: number;
		cash: number;
		card: number;
		bank: number;
	};
};
