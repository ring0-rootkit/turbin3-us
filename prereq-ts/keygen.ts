//Кошелек в файле: 8psYQUpjA5791vszoiwD7wJxYjz1ngqPetcVgTTqA9DB
import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate()

console.log(`You've generated a new Solana wallet:${kp.publicKey.toBase58()}`) 
console.log(`[${kp.secretKey}]`)
