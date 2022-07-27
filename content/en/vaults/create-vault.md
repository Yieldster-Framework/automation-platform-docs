---
title: Create a Vault
description: ''
position: 15
category: 'Vaults'
---

## Overview

The Yieldster Automation Platform provides an easy drag&drop UI to setup your vaults. Click on "Create Vault" in the main menu.

<img src="./screenshots/create-vault-overview.jpg" width="1280" height="941" alt="Create a vault"/>

<alert type="info">

All settings of a vault can always be changed by the administrator in the settings of a vault.

</alert>

## 1. Support

<img src="./screenshots/create-vault-support.png" width="540" height="390" alt="Create a vault"/>

Add deposit strategy, withdrawal strategy, allocation percentage for management and performance fees, and the beneficiary address.

### Management Fee

The vault admin can set a management fee percentage between 0% and 10% annually. Management Fees are calculated on the assets under management in the vault. Fees are calculated every time a deposit or withdrawal transaction is processed and on a regular basis. Fees will be transferred to the beneficiary’s address.

### Performance Fee

The vault admin can set a performance fee percentage between 0% and 50%. Fees are calculated as a percentage of the increase in NAV (value of assets under management). Fees are calculated every time a deposit or withdrawal transaction is processed and on a regular basis. Fees will be transferred to the beneficiary’s address. Performance fees do not take high watermarks into account.

<alert type="warning">

You cannot create a vault until you provide the beneficiary addresses.

</alert>

## 2. Assets

<img src="./screenshots/create-vault-assets.png" width="540" height="318" alt="Create a vault"/>

The Asset section determines which assets, protocols or other yieldster vaults are allowed in the vault. You can only deposit or withdraw assets that are explicitly allowed in the vault. To add assets, protocols and vaults simply drag and drop from the selection on the left.

## 3. Core

<img src="./screenshots/create-vault-core.png" width="540" height="221" alt="Create a vault"/>

Select an advisor and customize the settings.

Read more about advisors [here](/advisors/advisors).

## 4. Admin

<img src="./screenshots/create-vault-admin.png" width="540" height="454" alt="Create a vault"/>

Enter the vault name, the name of the token minted by the vault, and the symbol of the token minted by the vault, all of which are unique to the vault. Also you can upload a vault icon.

The vault admin's wallet address is pre-populated.

### Emergency wallet

A vault admin must add the Emergency wallet. Every vault has an emergency exit functionality, which is a function call that is to be triggered whenever the vault is compromised due to any technical fault. In such instances, the assets in the vault will be moved to this emergency wallet address.

<alert type="warning">

You should use a different wallet address than the admin's wallet address just in case the vault gets compromised through the admins wallet address. Best practice is to use a cold wallet.

</alert>

## Final Validation

When all of the cards in the Vault creation are complete, the vault administrator will be directed to validate five steps: vault proxy creation, register with APS, set vault assets, set token information, and set vault beneficiary. Each step must also be authorized in MetaMask. When this is verified, the vault is successfully created.

<alert type="warning">

You will be charged for all five transaction that will deducted from your wallet.

</alert>

<alert type="info">

Taking into account the verification and authorization of all five steps, the creation of a vault takes about 5 minutes.

</alert>


