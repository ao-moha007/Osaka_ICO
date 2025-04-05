# Solidity API

## OsakaToken

This contract implements a basic token with transfer, approval, and tracking functionalities.

_This contract is not fully ERC-20 compliant (e.g., missing return values on some functions)_

### Contract
OsakaToken : contracts/ERC20/OsakaToken.sol

This contract is not fully ERC-20 compliant (e.g., missing return values on some functions)

 --- 
### Functions:
### constructor

```solidity
constructor(uint256 initialSupply) public
```

Constructor to initialize the token with an initial supply

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| initialSupply | uint256 | The total supply to be minted initially and assigned to the deployer |

### incrementTransactionId

```solidity
function incrementTransactionId() internal
```

_Internal function to increment the transaction ID counter_

### transfer

```solidity
function transfer(address to, uint256 amount) public returns (bool success)
```

Transfers tokens from caller to specified address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| to | address | The address to send tokens to |
| amount | uint256 | The number of tokens to send |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | True if transfer is successful |

### approve

```solidity
function approve(address _spender, uint256 _value) public returns (bool success)
```

Approves `_spender` to transfer `_value` tokens on behalf of caller

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _spender | address | The address allowed to spend |
| _value | uint256 | The number of tokens to approve |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | True if approval is successful |

### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _value) public returns (bool seuccess)
```

Transfers tokens from one address to another using allowance

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _from | address | The address from which tokens are transferred |
| _to | address | The address receiving tokens |
| _value | uint256 | The number of tokens to transfer |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| seuccess | bool | True if transfer is successful |

### getTokenHolderData

```solidity
function getTokenHolderData(address _address) public view returns (uint256, address, address, uint256, bool)
```

Retrieves token holder information for a specific address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _address | address | The address to retrieve data for |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | _tokenId Token ID (currently unused) |
| [1] | address | _to Address receiving tokens |
| [2] | address | _from Address sending tokens |
| [3] | uint256 | _totalToken Number of tokens held |
| [4] | bool | _tokenHolder True if address has held tokens |

### getTokenHolder

```solidity
function getTokenHolder() public view returns (address[])
```

Returns a list of all token holder addresses

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | address[] | Array of token holder addresses |

 --- 
### Events:
### Transfer

```solidity
event Transfer(address from, address to, uint256 value)
```

Emitted when tokens are transferred from one address to another

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The address transferring the tokens |
| to | address | The address receiving the tokens |
| value | uint256 | The number of tokens transferred |

### Approval

```solidity
event Approval(address _owner, address _spender, uint256 _value)
```

Emitted when an address approves another address to spend tokens on their behalf

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _owner | address | The address giving the approval |
| _spender | address | The address being approved |
| _value | uint256 | The number of tokens approved to spend |

