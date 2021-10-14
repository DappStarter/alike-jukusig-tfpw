require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stove deny punch purpose harvest define army genre'; 
let testAccounts = [
"0x8b0aa680a9f9517cc107dfd31caa13f02310144f8c286763bce2b4b70e8953fe",
"0x0ee683f79fd3b3e831985bd4209060f571dfaf15e09ed8cb4974d671eadc2ec1",
"0xec20e36aed1146b019718cd6ffbf9acd525a97f3e35aae473376d190a28277b4",
"0x1d12b5f6167a3d1196735ae9926af726329133a20b4d9aa94947b123f3e69a09",
"0x8f77ae40684d748462f53eca3db51ac09b2e78e7aab57bc3b5952561b8756322",
"0x2974a11f9814eb9e5008f52b303d8d5fec14f72728502f7a52a516ca3a90e83b",
"0xc6728d3f807a49b6788302393118e1ae72fdc704a4cd094965824afe278bdc06",
"0xab89590fb4c1e55ae561c130e1400ce5fda2ddf0006eaaf893db754db95d7df6",
"0x4f6cfa0b3f4d6b95b9cc0d447de3c482c19fb7439027453bcaaa81bd5128f936",
"0xb4b858befad8fb6d3c425b8661f7cd1524285cb96ec4b9cb6a25e6479c8a546e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

