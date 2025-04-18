**THIS CHECKLIST IS NOT COMPLETE**. Use `--show-ignored-findings` to show all the results.
Summary
 - [solc-version](#solc-version) (1 results) (Informational)
 - [naming-convention](#naming-convention) (6 results) (Informational)
 - [constable-states](#constable-states) (4 results) (Optimization)
 - [immutable-states](#immutable-states) (2 results) (Optimization)
## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-0
Version constraint ^0.8.4 contains known severe issues (https://solidity.readthedocs.io/en/latest/bugs.html)
	- FullInlinerNonExpressionSplitArgumentEvaluationOrder
	- MissingSideEffectsOnSelectorAccess
	- AbiReencodingHeadOverflowWithStaticArrayCleanup
	- DirtyBytesArrayToStorage
	- DataLocationChangeInInternalOverride
	- NestedCalldataArrayAbiReencodingSizeValidation
	- SignedImmutables.
It is used by:
	- [^0.8.4](contracts/OsakaToken.sol#L2)

contracts/OsakaToken.sol#L2


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-1
Parameter [OsakaToken.transferFrom(address,address,uint256)._to](contracts/OsakaToken.sol#L114) is not in mixedCase

contracts/OsakaToken.sol#L114


 - [ ] ID-2
Parameter [OsakaToken.transferFrom(address,address,uint256)._value](contracts/OsakaToken.sol#L114) is not in mixedCase

contracts/OsakaToken.sol#L114


 - [ ] ID-3
Parameter [OsakaToken.transferFrom(address,address,uint256)._from](contracts/OsakaToken.sol#L114) is not in mixedCase

contracts/OsakaToken.sol#L114


 - [ ] ID-4
Parameter [OsakaToken.approve(address,uint256)._value](contracts/OsakaToken.sol#L103) is not in mixedCase

contracts/OsakaToken.sol#L103


 - [ ] ID-5
Parameter [OsakaToken.approve(address,uint256)._spender](contracts/OsakaToken.sol#L103) is not in mixedCase

contracts/OsakaToken.sol#L103


 - [ ] ID-6
Parameter [OsakaToken.getTokenHolderData(address)._address](contracts/OsakaToken.sol#L129) is not in mixedCase

contracts/OsakaToken.sol#L129


## constable-states
Impact: Optimization
Confidence: High
 - [ ] ID-7
[OsakaToken.symbol](contracts/OsakaToken.sol#L14) should be constant 

contracts/OsakaToken.sol#L14


 - [ ] ID-8
[OsakaToken.decimals](contracts/OsakaToken.sol#L17) should be constant 

contracts/OsakaToken.sol#L17


 - [ ] ID-9
[OsakaToken.standard](contracts/OsakaToken.sol#L26) should be constant 

contracts/OsakaToken.sol#L26


 - [ ] ID-10
[OsakaToken.name](contracts/OsakaToken.sol#L11) should be constant 

contracts/OsakaToken.sol#L11


## immutable-states
Impact: Optimization
Confidence: High
 - [ ] ID-11
[OsakaToken.ownerOfContract](contracts/OsakaToken.sol#L23) should be immutable 

contracts/OsakaToken.sol#L23


 - [ ] ID-12
[OsakaToken.totalSupply](contracts/OsakaToken.sol#L20) should be immutable 

contracts/OsakaToken.sol#L20


