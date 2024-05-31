import * as crypto from 'crypto';
class Block {
    public index: number;
    public timestamp: string;
    public data: any;
    public previousHash: string;
    public hash: string;

    constructor(index: number, timestamp: string, data: any, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(): string {
        return require('crypto').createHash('sha256').update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).digest('hex');
    }
}

class Blockchain {
    public chain: Block[];

    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(): Block {
        return new Block(0, '31/05/2024', 'Genesis Block', '0');
    }

    getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(): boolean {
        for(let i = 0; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }

}

let jsChain = new Blockchain();

jsChain.addBlock(new Block(1,'31/05/2024', { amount: 4}));
jsChain.addBlock(new Block(2,'01/06/2024', { amount: 10}));

console.log(JSON.stringify(jsChain, null, 4));
console.log('A blockchain é válida? ' + jsChain.isChainValid());

