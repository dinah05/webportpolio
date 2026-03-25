import { Outlet } from 'react-router-dom';

export default function App() {
  return (
   <div className="w-[1280px] h-[3628px] mx-auto bg-gray-50 overflow-hidden">
      <main className="mx-auto max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
}
