import socialLeadershipRaw from './socialleadership_explorers';
import { normalizeAll } from './normalizeExplorers';

const SOCIALLEADERSHIP_EXPLORERS = normalizeAll(socialLeadershipRaw);
export default SOCIALLEADERSHIP_EXPLORERS;
