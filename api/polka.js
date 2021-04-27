import Keyring from '@polkadot/keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';


module.exports = async (req, res) => {
    const {
        query: { name },
    } = req
    try {
        await cryptoWaitReady();

        const keyring = new Keyring();
        const private_key = "sample present labor topple describe sun stick wide day machine absorb angry";

        const pair = keyring.addFromUri(private_key, {}, "sr25519");
        console.log(pair.address);
        res.send(`Hello Polka generated address is ` + pair.address);

    } catch (error) {
        console.log(error)
        res.send(error);
    }

}