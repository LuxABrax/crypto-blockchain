const Block = require("./block");
const { GENESIS_DATA } = require("./config");

describe("Block", () => {
	const timestamp = "a-date";
	const lastHash = "foo-hash";
	const hash = "bar-hash";
	const data = ["blockchain", "data"];

	const block = new Block({ timestamp, lastHash, hash, data });

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

	describe("genesis()", () => {
		const genesisBlock = Block.genesis();

		it("returns a Block instance", () => {
			expect(genesisBlock instanceof Block).toBe(true);
		});

		it("returns the genesis data", () => {
			expect(genesisBlock).toEqual(GENESIS_DATA);
		});
	});
});
