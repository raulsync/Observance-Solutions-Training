import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div className="flex items-center justify-center flex-col w-full h-[100vh] gap-5">
      <h1 className="text-2xl font-semibold">Color Picker</h1>
      <ColorPicker />
    </div>
  );
}

export default App;
