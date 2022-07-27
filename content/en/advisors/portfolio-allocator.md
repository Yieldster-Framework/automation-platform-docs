---
title: Portfolio Allocator
description: ''
position: 22
category: 'Advisors'
---

Description coming soon.

## Settings

<img src="./screenshots/create-vault-advisor-settings-portfolio-allocator.png" width="520" height="608" alt="Portfolio Allocator"/>

#### Email

The advisor will be notified via email if an error occurs during advisor execution.

#### Minimum transaction size (Tmin)

The vault will only transact if the value of available assets for a transaction exceeds the minimum transaction size. This setting is used to reduce the effect gas costs have on profitability of the vault, especially for smaller investment amounts

#### Monitoring Frequency (minutes)

Determines how often the advisor will apply the strategy against the assets in the vault. In general daily should be a good value, but for larger vaults shorter timeframes are usually more beneficial.

#### Foreced Rebalance

If forced rebalance is selected the vault will rebalance your positions even if the minimum transaction size is not reached for any of your positions. This can have a severely negative impact on performance due to gas costs and should only be used for vaults carrying larger balances.

#### Protocols

Set the percentage share a protocol should have in your portfolio.
