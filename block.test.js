const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./cryptoHash");

describe("Block", () => {
	const timestamp = "a-date";
	const lastHash = "foo-hash";
	const hash = "bar-hash";
	const data = ["blockchain", "data"];
	const nonce = 1;
	const difficulty = 1;

	const block = new Block({ timestamp, lastHash, hash, data, nonce, difficulty });

	it("has a timestamp property", () => {
		expect(block.timestamp).toEqual(timestamp);
	});

	it("has a lastHash property", () => {
		expect(block.lastHash).toEqual(lastHash);
	});

	it("has a hash property", () => {
		expect(block.hash).toEqual(hash);
	});

	it("has a data property", () => {
		expect(block.data).toEqual(data);
	});

	it("has a nonce property", () => {
		expect(block.nonce).toEqual(nonce);
	});

	it("has a difficulty property", () => {
		expect(block.difficulty).toEqual(difficulty);
	});

	describe("genesis()", () => {
		const genesisBlock = Block.genesis();

		it("returns a Block instance", () => {
			expect(genesisBlock instanceof Block).toBe(true);
		});

		it("returns the genesis data", () => {
			expect(genesisBlock).toEqual(GENESIS_DATA);
		});
	});

	describe("mineBlock()", () => {
		const lastBlock = Block.genesis();
		const data = "mined data";
		const minedBlock = Block.mineBlock({ lastBlock, data });

		it("returns a Block instance", () => {
			expect(minedBlock instanceof Block).toBe(true);
		});

		it("sets the `lastHash` to be the `hash` of the lastBLock", () => {
			expect(minedBlock.lastHash).toEqual(lastBlock.hash);
		});

		it("sets the `data`", () => {
			expect(minedBlock.data).toEqual(data);
		});

		it("sets a `timestamp`", () => {
			expect(minedBlock.timestamp).not.toEqual(undefined);
		});

		it("creates a SHA-256 `hash` based on the proper inputs", () => {
			expect(minedBlock.hash).toEqual(
				cryptoHash(
					minedBlock.timestamp,
					minedBlock.nonce,
					minedBlock.difficulty,
					lastBlock.hash,
					data
				)
			);
		});

		it("sets a `hash` that matches the difficulty criteria", () => {
			expect(minedBlock.hash.substring(0, minedBlock.difficulty)).toEqual(
				"0".repeat(minedBlock.difficulty)
			);
		});
	});
});
