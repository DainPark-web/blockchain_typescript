class Block {
    public index: number;
    public hash : string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

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

let blockchain: [Block] = [genessisBlock];


console.log(blockchain)