import './App.css';
import expenseItem from './components/expenseItem';
import NoName from './NoName';

function App() {
  const $h2 = <h2>반가워용</h2>;
  return (
    <>
      <expenseItem />
      <NoName />
      <div className='App'>
        <h1>헬로헬로</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 월요일 입니다...
          <br />
          그래서 공부가 하기 싫어요..;;;
        </p>
      </div>
    </> //두개 이상 태그를 리턴할 때는 반드시 부모태그가 있어야 한다.
    //만약 쓸데없는 부모 태그 만들지 않고 싶을 때는 - >React.Fragment사용(생략할 수 있음)
  );
}

export default App; //index.js에게 app을 넘김
//react는 <input />등 닫는 태그를 명확하게 표시 해줘야 함
