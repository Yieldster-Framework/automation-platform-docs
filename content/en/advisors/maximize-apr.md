---
title: Maximize APR
description: ''
position: 21
category: 'Advisors'
---

Description coming soon.

## Settings

<img src="./screenshots/create-vault-advisor-settings-maximize-apr.png" width="520" height="684" alt="Create a vault"/>

#### Email

The advisor will be notified via email if an error occurs during advisor execution.

#### Minimum Transaction Size (Tmin)

The vault will only transact if the value of available assets for a transaction exceeds the minimum transaction size. This setting is used to reduce the effect gas costs have on profitability of the vault, especially for smaller investment amounts

#### Monitoring Frequency (minutes)

Determines how often the advisor will apply the strategy against the assets in the vault. In general daily should be a good value, but for larger vaults shorter timeframes are usually more beneficial.

#### Estimated Gas Cost

To determine whether switching between protocols is profitable the Maximize APR strategy takes estimated gas costs into account. Higher estimated gas costs will reduce the number of transactions in your vault and will thereby improve profitability.

#### Look forward period (Days)

This is the timeframe used to calculate the total return that could be earned during the look forward period. Maximize APR only switches protocols if the expected earnings of the new protocol during the Look Forward Period exceeds estimated gas costs + slippage + Transaction Fees (not gas)

#### Forced Rebalance

If forced rebalance is selected the vault will rebalance your positions even if the minimum transaction size is not reached for any of your positions. This can have a severely negative impact on performance due to gas costs and should only be used for vaults carrying larger balances.

#### Protocols

Select the protocols, from which the advisor will choose the protocol with the highest APR and invest the vault assets in that protocol.