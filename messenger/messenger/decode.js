import NodeRSA from 'node-rsa';

let privateKey = "";
let encryptedMessage = "nuuH9P5ul2aXjy26WCFTSJWXz8dU5qTHLicy3xLIBST/jesMAmjQGy+wcMIAckUsXPB+7DlnEtc5ZsxKIrWnMQ==";

const key = new NodeRSA(privateKey);
const decryptedMessage = key.decrypt(encryptedMessage, 'utf8');

console.log(decryptedMessage);