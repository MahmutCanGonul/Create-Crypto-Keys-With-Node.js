var crypto = require('crypto');

var prime_length = 60;
var diffHell = crypto.createDiffieHellman(prime_length);

diffHell.generateKeys('base64');
var public_address = diffHell.getPublicKey('base64')+diffHell.getPublicKey('hex');

var private_key = diffHell.getPrivateKey('base64')+diffHell.getPrivateKey('hex');

diffHell.generateKeys('base64');
private_key = private_key+diffHell.getPrivateKey('base64')+diffHell.getPrivateKey('hex');


console.log("Public Key : " ,public_address);
console.log("Private Key : " ,private_key);
