import { TypeRegistry } from "@polkadot/types";
const typeRegistry = new TypeRegistry();

export { typeRegistry };

export * from "./staking";
export * from "./timestamp";
