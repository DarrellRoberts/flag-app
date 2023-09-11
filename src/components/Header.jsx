import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const Header = ({ setSearchValue, searchValue }) => {
  const { Search } = Input;
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
    setSearchValue('');
  };
  return (
    <header>
      <div className="logo">
        <h2>World Countries Info</h2>
      </div>
      <div className="search">
        <Space direction="vertical">
          <Search
            placeholder="Search by country"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Space>
      </div>
    </header>
  );
};

export default Header;
