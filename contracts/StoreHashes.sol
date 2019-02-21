
pragma solidity ^0.5.0;
contract StoreHashes {
	event NewCert(uint certId, string droneCorridor, string ipfsHash);
	
	struct CertHash {
		string droneCorridor;
		string ipfsHash;
	}

 	CertHash[] public certHashes;

 	mapping(uint => address) public certToOwner;
 	mapping (address => uint) public ownerCertCount;

 	function _createCert(string _droneCorridor, string _ipfsHash) public {
 		uint id = certHashes.push(CertHash(_droneCorridor, _ipfsHash)) - 1;
        certToOwner[id] = msg.sender;
        ownerCertCount[msg.sender]++;
        emit NewCert(id, _droneCorridor, _ipfsHash);
 	}


 function getHash() public view returns (string memory x) {
   return ipfsHash;
 }
}