import { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Editor } from 'primereact/editor';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const [date, setDate] = useState(null);

  const [text, setText] = useState('');

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
  };

  return (
    <div className="shadow-xl flex flex-col mt-4 w-[100%]  h-[100vh] items-center justify-center gap-4">
      <h1 className="font-bold">AutoComplete</h1>
      <AutoComplete
        value={value}
        suggestions={items}
        completeMethod={search}
        onChange={(e) => setValue(e.value)}
        placeholder="Search"
        className="border border-black "
      />
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        className="border border-gray-400"
        placeholder="datepicker"
        dateFormat="dd/mm/yy"
      />

      <Editor
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{ height: '320px' }}
      />
    </div>
  );
}

export default App;
