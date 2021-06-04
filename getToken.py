import requests
import os

def grabToken():
    port = getPort()
    url = "http://127.0.0.1:{}/api/token".format(port)
    myToken = requests.get(url).content.decode('UTF-8')
    return myToken

def getPort():
	initialDir = os.getenv('APPDATA')
	while initialDir and not initialDir.endswith('AppData'):
		initialDir = os.path.dirname(initialDir)
	newDir = initialDir + '\\Local\\BitTorrentHelper\\'
	f = open(newDir + "port", "r")
	port = f.readline()
	return port