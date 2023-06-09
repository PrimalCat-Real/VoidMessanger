import NodeRSA from 'node-rsa';

let publicKey = "-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALbebBzYez0WoPisQSdHfkuyHCqeSc97\nNW78jIbIuo/QW46XbVik5fnuKrxJYKZcpHTIGKtm+S980dfbe43aW1MCAwEAAQ==\n-----END PUBLIC KEY-----";
let message = "Hey, hi!"

const key = new NodeRSA(publicKey);
const encryptMessage = key.encrypt(message, 'base64');
console.log(encryptMessage);