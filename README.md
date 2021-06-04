[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![WTFPL License][license-shield]][license-url]

# BTTSpeed API
> Unofficial Python API Wrapper for the BTT (BitTorrent Token) Speed WebUI for uTorrent and BitTorrent Clients

## Installation

Git:

```git clone https://github.com/BTTBoost/BTTSpeed-API.git
```
## Available API Endpoints

* getEnv - get your current environment
* getUpdates - get current status
* getHourlyUpdate - hourly earnings update (not accurate)
* getTotalUpdate - get total earnings (not accurate)
* getPublicAddress - gets your wallet address
* getPublicKey - wallet public key
* getWalletTransactions - more detailed info on wallet transactions
* refreshBalance - refreshes your wallet balance, may be useful for "stuck" btt in limbo world
* checkBTTExchange - check to see if the BTT exchange has enough in balance for withdrawal

## Usage example

python

```
import bttAPI as api
from pprint import pprint

pprint(api.getWalletTransactions())
```

output:
```
[{'amount': 1195000000,
  'created': 1622713771,
  'id': 1622578556996,
  'message': 'calling interface [BroadcastTransaction] fail, reasons: '
             '[ResultCode[CONTRACT_VALIDATE_ERROR], Message[contract validate '
             'error : assetBalance is not sufficient.]]',
  'status': 'Complete',
  'type': 'Withdrawal'},
 {'amount': 2350000000,
  'created': 1622483796,
  'id': 1622483746585,
  'message': 'SUCCESS',
  'status': 'Complete',
  'type': 'Withdrawal'}]
```

## Excluded API Endpoints
There are some endpoints I have purposefully left out for numerous reasons: 1) The API endpoint is not publicly live (like the Binance Exchange Wallet Integration endpoints); 2) It's dangerous for those who don't know what they're doing (privatekey, seed phrase, etc)

Complete list of endpoints actually published by BitTorrent team can be seen in ``js/extracted.js``


## Release History

* 0.1
    * Work in progress

## Meta

BTT Boost – [Homepage](https://bttboost.com) – bttboost@pm.me

Distributed under the WTFPL license. See ``LICENSE`` for more information.

[https://github.com/bttboost/](https://github.com/bttboost/)

## Contributing

1. Fork it (<https://github.com/BTTBoost/BTTSpeed-API/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request










[contributors-shield]: https://img.shields.io/github/contributors/bttboost/BTTSpeed-API.svg?style=for-the-badge
[contributors-url]: https://github.com/bttboost/BTTSpeed-API/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bttboost/BTTSpeed-API.svg?style=for-the-badge
[forks-url]: https://github.com/bttboost/BTTSpeed-API/network/members
[stars-shield]: https://img.shields.io/github/stars/bttboost/BTTSpeed-API.svg?style=for-the-badge
[stars-url]: https://github.com/bttboost/BTTSpeed-API/stargazers
[issues-shield]: https://img.shields.io/github/issues/bttboost/BTTSpeed-API.svg?style=for-the-badge
[issues-url]: https://github.com/bttboost/BTTSpeed-API/issues
[license-shield]: https://img.shields.io/github/license/bttboost/BTTSpeed-API.svg?style=for-the-badge
[license-url]: https://github.com/BTTBoost/BTTSpeed-API/blob/main/LICENSE
[product-screenshot]: images/screenshot.png