import bttAPI as api
from pprint import pprint

print(api.token)
print(api.getUpdates())
pprint(api.getHourlyUpdate())
pprint(api.getWalletTransactions())
print(api.getPublicAddress())
print(api.checkBTTExchange())