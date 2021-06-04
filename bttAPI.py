import requests
import os
from getToken import getPort, grabToken


base = 'http://127.0.0.1'
port = getPort()
token = grabToken()
exchangeWalletBTT = 'TA1EHWb1PymZ1qpBNfNj9uTaxd18ubrC7a' # Do Not Change This Unless You Know What You're Doing


def getEnv(base=base, token=token, port=port):
	url = "{}:{}/api/env?t={}".format(base, port, token)
	data = requests.get(url).json()
	return data

# EARNINGS API
def getUpdates(base=base, token=token, port=port):
	url = "{}:{}/api/status?t={}".format(base, port, token)
	data = requests.get(url).json()
	return data

def getHourlyUpdate(base=base, token=token, port=port):
	url = "{}:{}/api/revenue/hourly?t={}&revenue_type=earning".format(base, port, token)
	data = requests.get(url).json()
	return data
 
def getTotalUpdate(base=base, token=token, port=port):
	url = "{}:{}/api/revenue/total?t={}".format(base, port, token)
	data = requests.get(url).json()
	return data

#WALLET API
 
def getPublicAddress(base=base, token=token, port=port):
	url = "{}:{}/api/public_address?t={}".format(base, port, token)
	pubAddr = requests.get(url).content.decode('UTF-8')
	return pubAddr

def getPublicKey(base=base, token=token, port=port):
	url = "{}:{}/api/public_key?t={}".format(base, port, token)
	pubKey = requests.get(url).content.decode('UTF-8')
	return pubKey


def getWalletTransactions(base=base, token=token, port=port):
	url = "{}:{}/api/exchange/transactions?t={}&count=100".format(base, port, token)
	data = requests.get(url).json()
	return data

def refreshBalance(base=base, token=token, port=port):
	url = "{}:{}/api/refresh_balance?t={}".format(base, port, token)
	try:
		data = requests.get(url)
		if data.status_code == 200:
			return
		else:
			print("Error: {}".format(data.status_code))
			return False
	except:
		return False

# BTT TOKEN EXCHANGE API

def checkBTTExchange():
	exchangeWallet = 'https://apilist.tronscan.org/api/account?address={}'.format(exchangeWalletBTT)
	data = requests.get(exchangeWallet).json()
	bttBalance = data['tokenBalances'][1]
	if bttBalance['tokenAbbr'] == 'BTT':
		walletBal = float(bttBalance['balance'].replace(',',''))/1000000
		return walletBal
	else:
		print("Error: BTT index incorrect")