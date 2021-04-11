require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'half climb force trip maple note spice quality hunt brave equal gaze'; 
let testAccounts = [
"0x61c997fff092bb39a56583faf916cd99d59d05a47d8d801ddb17706ddec990b8",
"0x70cacbc55cb47d57265400cd90fea2cf3e496e6e5508abc82583329e232d1638",
"0x706bfc5fdc6b6a933c9cc756705482a413c7109be830a667b33fdf645a4f97c0",
"0x6b25e65410247db0605619801b99f9fe774a5e8dc8168b36bff1e35bdd96e61c",
"0x953db64875e12766125dd6ce8f46c8aaf93c8a16467fba2649aaf0dfa584514b",
"0x40db4cc546adfbdc7ff2deda9bfb317be7f964b124b4f79cd5bba6eec76f6567",
"0x4fbd1cc71babe8aaf66ff7feaaa6ea96faefc3ef134f4933543685fafbb80f63",
"0x68f7a8e28702ce1311f9526c28d8e97b86159c5e67a669518d793f429a164f63",
"0xad36319e9d6a86a063cccf3788e5be8c890177392d6d040bbe60c3f4fbcd6457",
"0xeb8dbd5d05f4c7d6f48751918a66fa4f501289dfca6cec3408e23a7c76ec444f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

