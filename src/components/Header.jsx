import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setSearchValue, searchValue }) => {
  const { Search } = Input;
  const [value, setValue] = useState('');
  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setSearchValue(transcript);
  };
  const startListening = () => {
    recognition.start();
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
        cursor: 'pointer',
      }}
      onClick={startListening}
    />
  );
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    setSearchValue(value);
    setValue('');
  };
  return (
    <header>
      <div className="logo">
        <Link to="/" className="link">
          <h2>World Countries Info</h2>
        </Link>
      </div>
      <div className="search">
        <Space direction="vertical">
          <Search
            id="searchField"
            placeholder="Search by country"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Space>
      </div>
    </header>
  );
};

export default Header;
