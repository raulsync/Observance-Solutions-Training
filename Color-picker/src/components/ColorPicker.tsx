import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState<string>('#ffffff');
  const [copied, setCopied] = useState<boolean>(false);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(color).then(
      () => {
        setCopied(true);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      },
    );
  };

  return (
    <div className="p-4 max-w-sm mx-auto  shadow-lg rounded-lg text-center flex flex-col items-center justify-center w-full h-[50vh] bg-slate-400">
      <div className="w-full h-1/2">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-full cursor-pointer outline-none rounded-md h-full border-none"
        />
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={color}
          readOnly
          className="w-full p-2 text-center border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {copied ? 'Copied' : 'Copy color code'}
        </button>
        {copied && <p className="mt-2 text-black-500">Copied!</p>}
      </div>
    </div>
  );
};

export default ColorPicker;
