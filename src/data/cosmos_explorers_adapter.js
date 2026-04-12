import cosmosRaw from './cosmos_explorers';
import { normalizeAll } from './normalizeExplorers';

const COSMOS_EXPLORERS = normalizeAll(cosmosRaw);
export default COSMOS_EXPLORERS;
