const Block = require("./block");

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
});
