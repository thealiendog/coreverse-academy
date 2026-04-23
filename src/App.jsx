import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(err) { return { error: err }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', background: '#080618', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#1a0a2e', border: '1px solid #7C3AED', borderRadius: '16px', padding: '24px', maxWidth: '600px', width: '100%' }}>
            <p style={{ color: '#EF4444', fontWeight: 'bold', marginBottom: '12px' }}>Error caught:</p>
            <pre style={{ color: '#FCA5A5', fontSize: '13px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {this.state.error?.message}
              {'\n\n'}
              {this.state.error?.stack}
            </pre>
            <button onClick={() => this.setState({ error: null })} style={{ marginTop: '16px', padding: '8px 16px', background: '#7C3AED', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

import Splash                  from './pages/Splash';
import OnboardingHowItWorks    from './pages/OnboardingHowItWorks';
import OnboardingChildSetup    from './pages/OnboardingChildSetup';
import OnboardingCurriculum    from './pages/OnboardingCurriculum';
import OnboardingAccount       from './pages/OnboardingAccount';
import ParentSignup            from './pages/ParentSignup';
import ParentLogin             from './pages/ParentLogin';
import ParentLayout    from './pages/ParentLayout';
import ParentDashboard from './pages/ParentDashboard';
import ChildrenList    from './pages/ChildrenList';
import AddChild        from './pages/AddChild';
import SubjectsBrowse  from './pages/SubjectsBrowse';
import MeetTheGuides  from './pages/MeetTheGuides';
import StateCompliance from './pages/StateCompliance';
import Account         from './pages/Account';
import ChildSelect     from './pages/ChildSelect';
import ChildDashboard  from './pages/ChildDashboard';
import SubjectView     from './pages/SubjectView';
import LessonPlayer    from './pages/LessonPlayer';
import GameLessonPlayer from './components/games/GameLessonPlayer';
import TemplateTest     from './pages/TemplateTest';

// Dispatches to GameLessonPlayer for Little Stars (?level=1) lessons
// that have a gameSequence; falls back to LessonPlayer otherwise.
function LessonDispatcher() {
  const [searchParams] = useSearchParams();
  // Only route to GameLessonPlayer when ?level=1 is EXPLICITLY present.
  // Defaulting to 1 caused GameLessonPlayer to render LessonPlayer (with NovaChat) as a fallback,
  // creating the NovaChat overlap bug.
  const level = parseInt(searchParams.get('level'), 10);
  if (level === 1) return <GameLessonPlayer />;
  return <LessonPlayer />;
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/"                        element={<Splash />} />
        <Route path="/onboarding"              element={<OnboardingHowItWorks />} />
        <Route path="/onboarding/child"        element={<OnboardingChildSetup />} />
        <Route path="/onboarding/curriculum"   element={<OnboardingCurriculum />} />
        <Route path="/onboarding/account"      element={<OnboardingAccount />} />
        <Route path="/parent/signup"           element={<ParentSignup />} />
        <Route path="/parent/login"            element={<ParentLogin />} />

        {/* Parent (authenticated layout) */}
        <Route path="/parent" element={<ParentLayout />}>
          <Route index element={<Navigate to="/parent/dashboard" replace />} />
          <Route path="dashboard"      element={<ParentDashboard />} />
          <Route path="guides"         element={<MeetTheGuides />} />
          <Route path="children"       element={<ChildrenList />} />
          <Route path="children/add"   element={<AddChild />} />
          <Route path="subjects"       element={<SubjectsBrowse />} />
          <Route path="compliance"     element={<StateCompliance />} />
          <Route path="account"        element={<Account />} />
        </Route>

        {/* Child flow */}
        <Route path="/child/select"             element={<ChildSelect />} />
        <Route path="/child/dashboard"          element={<ChildDashboard />} />
        <Route path="/child/subject/:subjectId" element={<ErrorBoundary><SubjectView /></ErrorBoundary>} />
        <Route path="/child/lesson/:subjectId/:lessonIdx" element={<ErrorBoundary><LessonDispatcher /></ErrorBoundary>} />

        {/* Dev: template testing */}
        <Route path="/template-test" element={<TemplateTest />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
