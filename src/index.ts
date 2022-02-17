import * as CryptoJs from "crypto-js";

class Block {
    public index: number;
    public hash : string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockhash = (
        index:number, 
        previousHash: string, 
        timestamp: number, 
        data: string
        ): string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash : string,
        previousHash: string,
        data: string,
        timestamp: number
        ){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
    }




}

const genessisBlock:Block = new Block(0, "20202020202020202", "", "block1234", 123456);

let blockchain: Block[] = [genessisBlock];

const getBlockchain = ():Block[] => blockchain;

const getLatesBlock = (): Block => getBlockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime()/1000);

console.log(blockchain)