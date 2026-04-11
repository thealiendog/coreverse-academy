// ── localStorage helpers ──────────────────────────────────────────────────────

const KEYS = {
  parents: 'ia_parents',
  currentParent: 'ia_current_parent',
  currentChild: 'ia_current_child',
};

// Parents
export function getParents() {
  return JSON.parse(localStorage.getItem(KEYS.parents) || '[]');
}

export function saveParent(parent) {
  const parents = getParents();
  const idx = parents.findIndex(p => p.id === parent.id);
  if (idx >= 0) parents[idx] = parent;
  else parents.push(parent);
  localStorage.setItem(KEYS.parents, JSON.stringify(parents));
}

export function getParentByEmail(email) {
  return getParents().find(p => p.email.toLowerCase() === email.toLowerCase()) || null;
}

export function getParentById(id) {
  return getParents().find(p => p.id === id) || null;
}

// Session
export function setCurrentParent(parent) {
  localStorage.setItem(KEYS.currentParent, JSON.stringify(parent));
}

export function getCurrentParent() {
  return JSON.parse(localStorage.getItem(KEYS.currentParent) || 'null');
}

export function clearCurrentParent() {
  localStorage.removeItem(KEYS.currentParent);
  localStorage.removeItem(KEYS.currentChild);
}

export function setCurrentChild(child) {
  localStorage.setItem(KEYS.currentChild, JSON.stringify(child));
}

export function getCurrentChild() {
  return JSON.parse(localStorage.getItem(KEYS.currentChild) || 'null');
}

export function clearCurrentChild() {
  localStorage.removeItem(KEYS.currentChild);
}

// Children helpers (stored inside parent object)
export function addChildToParent(parentId, child) {
  const parent = getParentById(parentId);
  if (!parent) return null;
  parent.children = parent.children || [];
  parent.children.push(child);
  saveParent(parent);
  setCurrentParent(parent);
  return parent;
}

export function updateChildProgress(parentId, childId, subject, lessonIdx) {
  const parent = getParentById(parentId);
  if (!parent) return;
  const child = parent.children.find(c => c.id === childId);
  if (!child) return;
  child.progress = child.progress || {};
  child.progress[subject] = Math.max(child.progress[subject] || 0, lessonIdx + 1);
  saveParent(parent);
  setCurrentParent(parent);
  // update current child too
  const stored = getCurrentChild();
  if (stored && stored.id === childId) setCurrentChild(child);
}

export function awardBadge(parentId, childId, badge) {
  const parent = getParentById(parentId);
  if (!parent) return;
  const child = parent.children.find(c => c.id === childId);
  if (!child) return;
  child.badges = child.badges || [];
  if (!child.badges.includes(badge)) child.badges.push(badge);
  saveParent(parent);
  setCurrentParent(parent);
  const stored = getCurrentChild();
  if (stored && stored.id === childId) setCurrentChild(child);
}

// Generate IDs
export function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
