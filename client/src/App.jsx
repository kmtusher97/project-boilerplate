import { AppRoutes } from './routes/AppRoutes';

import { QueryProvider } from './contexts/QueryProvider';
import { AuthProvider } from './contexts/AuthContext';

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
