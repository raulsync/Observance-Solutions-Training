import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.6);
  opacity: 0.5;
`;

interface SearchInputProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  city,
  setCity,
  handleSearch,
}) => {
  return (
    <form
      onSubmit={handleSearch}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
    </form>
  );
};

export default SearchInput;
