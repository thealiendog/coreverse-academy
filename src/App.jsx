import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
import StateCompliance from './pages/StateCompliance';
import Account         from './pages/Account';
import ChildSelect     from './pages/ChildSelect';
import ChildDashboard  from './pages/ChildDashboard';
import SubjectView     from './pages/SubjectView';
import LessonPlayer    from './pages/LessonPlayer';

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
          <Route path="children"       element={<ChildrenList />} />
          <Route path="children/add"   element={<AddChild />} />
          <Route path="subjects"       element={<SubjectsBrowse />} />
          <Route path="compliance"     element={<StateCompliance />} />
          <Route path="account"        element={<Account />} />
        </Route>

        {/* Child flow */}
        <Route path="/child/select"             element={<ChildSelect />} />
        <Route path="/child/dashboard"          element={<ChildDashboard />} />
        <Route path="/child/subject/:subjectId" element={<SubjectView />} />
        <Route path="/child/lesson/:subjectId/:lessonIdx" element={<LessonPlayer />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
