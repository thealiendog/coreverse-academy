const KEY = 'ia_onb';

export function getOnboardingDraft() {
  return JSON.parse(sessionStorage.getItem(KEY) || '{}');
}

export function updateOnboardingDraft(patch) {
  const prev = getOnboardingDraft();
  sessionStorage.setItem(KEY, JSON.stringify({ ...prev, ...patch }));
}

export function clearOnboardingDraft() {
  sessionStorage.removeItem(KEY);
}
