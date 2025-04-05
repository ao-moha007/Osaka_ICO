// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/// @title OsakaToken - A simple ERC-20-like token implementation
/// @author Your Name
/// @notice This contract implements a basic token with transfer, approval, and tracking functionalities.
/// @dev This contract is not fully ERC-20 compliant (e.g., missing return values on some functions)

contract OsakaToken {
    /// @notice Name of the token
    string public name = "OsakaToken";

    /// @notice Symbol of the token
    string public symbol = "OSK";

    /// @notice Number of decimal places the token uses
    uint8 public decimals = 18;

    /// @notice Total supply of tokens in circulation
    uint256 public totalSupply;

    /// @notice Owner of the deployed contract
    address public ownerOfContract;

    /// @notice Versioning identifier for the token standard
    string public standard = "OsakaToken v.0.1";

    /// @notice List of all token holder addresses
    address[] public holderToken;

    /// @notice Maps addresses to their token balances
    mapping(address => uint256) public balanceOf;

    /// @notice Stores token holding info per address
    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    /// @notice Tracks approvals: amount `_spender` can spend on behalf of `_owner`
    mapping(address => mapping(address => uint256)) public allowance;

    /// @notice Counter for token transfer transactions
    uint256 public transactionId;

    /// @notice Structure for tracking token holder metadata
    struct TokenHolderInfo {
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    /// @notice Emitted when tokens are transferred from one address to another
    /// @param from The address transferring the tokens
    /// @param to The address receiving the tokens
    /// @param value The number of tokens transferred
    event Transfer(address indexed from, address indexed to, uint256 value);

    /// @notice Emitted when an address approves another address to spend tokens on their behalf
    /// @param _owner The address giving the approval
    /// @param _spender The address being approved
    /// @param _value The number of tokens approved to spend
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    /// @notice Constructor to initialize the token with an initial supply
    /// @param initialSupply The total supply to be minted initially and assigned to the deployer
    constructor(uint256 initialSupply) {
        ownerOfContract = msg.sender;
        totalSupply = initialSupply;
        balanceOf[ownerOfContract] = totalSupply;
    }

    /// @dev Internal function to increment the transaction ID counter
    function incrementTransactionId() internal {
        transactionId++;
    }

    /// @notice Transfers tokens from caller to specified address
    /// @param to The address to send tokens to
    /// @param amount The number of tokens to send
    /// @return success True if transfer is successful
    function transfer(address to, uint256 amount) public returns (bool success) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        incrementTransactionId();

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;

        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[to];
        tokenHolderInfo._to = to;
        tokenHolderInfo._from = msg.sender;
        tokenHolderInfo._totalToken = amount;
        tokenHolderInfo._tokenHolder = true;

        holderToken.push(to);
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    /// @notice Approves `_spender` to transfer `_value` tokens on behalf of caller
    /// @param _spender The address allowed to spend
    /// @param _value The number of tokens to approve
    /// @return success True if approval is successful
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    /// @notice Transfers tokens from one address to another using allowance
    /// @param _from The address from which tokens are transferred
    /// @param _to The address receiving tokens
    /// @param _value The number of tokens to transfer
    /// @return seuccess True if transfer is successful
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool seuccess) {
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    /// @notice Retrieves token holder information for a specific address
    /// @param _address The address to retrieve data for
    /// @return _tokenId Token ID (currently unused)
    /// @return _to Address receiving tokens
    /// @return _from Address sending tokens
    /// @return _totalToken Number of tokens held
    /// @return _tokenHolder True if address has held tokens
    function getTokenHolderData(address _address)
        public
        view
        returns (uint256, address, address, uint256, bool)
    {
        return (
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    }

    /// @notice Returns a list of all token holder addresses
    /// @return Array of token holder addresses
    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
