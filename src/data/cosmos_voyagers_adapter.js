import cosmosVoyagersRaw from './cosmos_voyagers';
import { normalizeAll } from './normalizeExplorers';

const COSMOS_VOYAGERS = normalizeAll(cosmosVoyagersRaw);
export default COSMOS_VOYAGERS;
