var s = {
	protocol: "http",
	domain: "127.0.0.1",
	isMock: !1,
	port: void 0,
	base: "api",
	token: void 0,
	endpoints: {
		env: {
			get: {}
		},
		token: {
			get: {}
		},
		"store/onboard": {
			get: {},
			post: {
				body: String
			}
		},
		"store/survey_banner": {
			get: {},
			post: {
				body: String
			}
		},
		"store/tours_seen": {
			get: {},
			post: {
				body: String
			}
		},
		"store/is_new_user": {
			get: {},
			post: {
				body: String
			}
		},
		status: {
			get: {}
		},
		"trongrid/status": {
			get: {}
		},
		spend: {
			get: {},
			post: {
				body: String
			}
		},
		"store/spend": {
			get: {},
			post: {
				body: String
			}
		},
		creation_complete: {
			get: {},
			post: {
				body: String
			}
		},
		password: {
			get: {
				params: {
					pw: String
				}
			},
			post: {
				body: String
			}
		},
		seed_phrase: {
			get: {
				params: {
					pw: String
				}
			},
			post: {
				body: String
			},
			head: {
				params: {
					seed_phrase: String
				}
			}
		},
		private_key: {
			get: {
				params: {
					pw: String
				}
			},
			post: {
				body: String
			},
			head: {
				params: {
					private_key: String
				}
			}
		},
		public_key: {
			get: {}
		},
		public_address: {
			get: {}
		},
		terminate: {
			post: {
				contentType: null
			}
		},
		airdrops: {
			get: {},
			post: {
				body: null
			}
		},
		airdrop_claimed: {
			post: {}
		},
		"airdrop/pro/available": {
			get: {}
		},
		"airdrop/pro/claim": {
			get: {}
		},
		"store/airdrop_pro": {
			get: {},
			post: {
				body: String
			}
		},
		refresh_balance: {
			get: {}
		},
		"store/airdrop_claim_failed": {
			get: {},
			post: {
				body: String
			}
		},
		"store/settings": {
			get: {},
			post: {
				body: String
			}
		},
		"exchange/transactions": {
			get: {
				params: {
					count: Number
				},
				defaultParams: {
					count: 5
				}
			}
		},
		"exchange/deposit": {
			get: {
				params: {
					id: String
				}
			},
			post: {
				params: {
					amount: Number
				}
			}
		},
		"exchange/withdrawal": {
			get: {
				params: {
					id: String
				}
			},
			post: {
				params: {
					amount: Number
				}
			}
		},
		"exchange/activate_account": {
			get: {},
			post: {}
		},
		"store/allocations": {
			get: {},
			post: {}
		},
		"btfs/status": {
			get: {}
		},
		"btfs/import": {
			post: {
				params: {
					pw: String
				}
			}
		},
		"revenue/hourly": {
			get: {
				params: {
					revenue_type: String
				}
			}
		},
		"revenue/hour_by_hour": {
			get: {
				params: {
					revenue_type: String,
					start_date: Number,
					end_date: Number
				}
			}
		},
		"revenue/daily": {
			get: {
				params: {
					revenue_type: String,
					start_date: Number,
					end_date: Number
				}
			}
		},
		"revenue/total": {
			get: {}
		},
		email: {
			get: {},
			post: {}
		},
		"binance/binance_info": {
			get: {},
			post: {
				body: String
			}
		},
		"binance/quote_info": {
			get: {},
			post: {
				params: {
					crypto_currency: String,
					base_currency: String,
					fiat_currency: String,
					requested_amount: String,
					pay_type: String,
					quote_id: String
				}
			}
		},
		"binance/create_transaction": {
			post: {
				params: {
					order_id: String,
					quote_id: String
				}
			}
		},
		"binance/recent_transactions": {
			get: {}
		}
	}
};