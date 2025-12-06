// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract SmartAccount {
    address public owner;
    address public guardian;
    
    event GuardianSet(address indexed guardian);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    
    constructor(address _owner, address _guardian) {
        owner = _owner;
        guardian = _guardian;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    modifier onlyGuardian() {
        require(msg.sender == guardian, "Not guardian");
        _;
    }
    
    function setGuardian(address _newGuardian) external onlyOwner {
        guardian = _newGuardian;
        emit GuardianSet(_newGuardian);
    }
    
    function recoverAccount(address _newOwner) external onlyGuardian {
        address previousOwner = owner;
        owner = _newOwner;
        emit OwnershipTransferred(previousOwner, _newOwner);
    }
    
    function execute(address _to, uint256 _value, bytes calldata _data) 
        external 
        onlyOwner 
        returns (bool, bytes memory) 
    {
        (bool success, bytes memory result) = _to.call{value: _value}(_data);
        return (success, result);
    }
    
    receive() external payable {}
}

contract SmartAccountFactory is Ownable {
    mapping(address => address) public userAccounts;
    address[] public allAccounts;
    
    event AccountCreated(address indexed user, address indexed smartAccount, address guardian);
    
    constructor() Ownable(msg.sender) {}
    
    function createAccount(address _guardian) external returns (address) {
        require(userAccounts[msg.sender] == address(0), "Account already exists");
        
        SmartAccount newAccount = new SmartAccount(msg.sender, _guardian);
        address accountAddress = address(newAccount);
        
        userAccounts[msg.sender] = accountAddress;
        allAccounts.push(accountAddress);
        
        emit AccountCreated(msg.sender, accountAddress, _guardian);
        
        return accountAddress;
    }
    
    function getAccount(address _user) external view returns (address) {
        return userAccounts[_user];
    }
    
    function getTotalAccounts() external view returns (uint256) {
        return allAccounts.length;
    }
}
