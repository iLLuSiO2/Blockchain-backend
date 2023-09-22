// contracts/StorageContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageContract {
    string public storedData;

    // Function to set the stored data
    function set(string memory _data) public {
        storedData = _data;
    }

    // Function to get the stored data
    function get() public view returns (string memory) {
        return storedData;
    }
}
