import { AppRoutes } from './routes/AppRoutes';

import { AuthProvider } from './contexts/AuthContext';
import { QueryProvider } from './contexts/QueryProvider';

import './App.css';

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
