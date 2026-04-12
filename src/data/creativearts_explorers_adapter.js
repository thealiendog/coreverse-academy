import creativeArtsRaw from './creativearts_explorers';
import { normalizeAll } from './normalizeExplorers';

const CREATIVEARTS_EXPLORERS = normalizeAll(creativeArtsRaw);
export default CREATIVEARTS_EXPLORERS;
