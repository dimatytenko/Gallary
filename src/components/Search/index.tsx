import {Input} from 'antd';
const {Search} = Input;

interface SearchComponentProps {
  placeholder: string;
  onSearch: (value: string) => void;
  enterButton: string;
  size: 'small' | 'middle' | 'large';
}

export const SearchComponent: React.FC<SearchComponentProps> = ({placeholder, onSearch, enterButton, size}) => {
  return <Search placeholder={placeholder} allowClear enterButton={enterButton} size={size} onSearch={onSearch} />;
};
