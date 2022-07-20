import logo from './logo.svg';
import './App.css';
import{useState} from 'react';

function App() {
  let posts = '교대 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState('안녕');

  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>

      <button onClick={ () => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>
        가나다순
      </button>

      <div className="list">
        <h4>{글제목[0]} 
          <button onClick={ () => {
            let copy = 글제목;
            copy[0] = '여자 코트 추천'
            console.log(copy == 글제목);
            
            글제목변경(copy);
          }} > 
            버튼
          </button>
          <span onClick={ () => 따봉변경('반가워')}>👁</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App;
