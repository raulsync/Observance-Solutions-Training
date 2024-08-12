import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  width: 50%;
  border-radius: 5px;
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
