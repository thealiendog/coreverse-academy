import lifeWellnessRaw from './lifewellness_explorers';
import { normalizeAll } from './normalizeExplorers';

const LIFEWELLNESS_EXPLORERS = normalizeAll(lifeWellnessRaw);
export default LIFEWELLNESS_EXPLORERS;
