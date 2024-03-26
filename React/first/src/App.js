import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import $, { event } from 'jquery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

function ThemSinhVien(props) {
  const [ten, setTen] = useState("");

  //Hàm xử lý khi người dùng điền tên sinh viên
  function handleChange(e) {
    setTen(e.target.value);
  }

  //Hàm xử lý khi người dùng nhấn Thêm sinh viên (submit)
  function handleSubmit(e) {
    props.handleSubmit(ten)
    setTen('');
    e.preventDefault();
  }

  //Hàm xử lý khi người dùng nhấn Xóa sinh viên
  function handleDelete(index) {
    props.handleDelete(index);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text'
          placeholder='Tên sinh viên'
          onChange={handleChange}
          value={ten} /><br></br>
        <button type='submit'>Thêm sinh viên</button>
      </form>
      <button onClick={() => handleDelete()}>Xóa</button>
    </div>

  );
}

function SinhViens(props) {
  //Lấy dữ liệu ban đầu
  const danhsachSV = props.data;

  //Hàm xử lý khi người dùng nhấn Xóa sinh viên
  function handleDelete(index) {
    props.handleDelete(index);
  }

  //Đặt tên từng sinh viên vào trong thẻ li
  const sinhViens = danhsachSV?.map((sv, index) =>
    <li key={index}>{sv}
      <button onClick={() => handleDelete(index)}>Xóa</button>
    </li>
  );

  return (
    <div>
      <ul>{sinhViens}</ul>
    </div>
  )
}

function DSSinhVien(props) {
  const [duLieu, setDuLieu] = useState([]);
  const arrSV = ["Ngọc Anh", "Vũ Hà", "Thu Hương"];

  function themSVmoi(ten) {
    setDuLieu([...duLieu, ten]);
  }

  function xoaSV(index) {
    const newDuLieu = [...duLieu];
    newDuLieu.splice(index, 1);
    setDuLieu(newDuLieu);
  }

  return (
    <div>
      <ThemSinhVien handleSubmit={themSVmoi} handleDelete={xoaSV} />
      <SinhViens data={duLieu} handleDelete={xoaSV} />
    </div>
  );
}

function Code() {

  function Submit(e) {

    function validateEmail(email) {
      const regex = /^a|b$/;
      return regex.test(email);
    }

    var email = $('#email').val();
    if (!validateEmail(email)) {
      alert("Vui lòng nhập đúng định dạng email!");
    }
  }

  return (
    <form onSubmit={Submit}>
      <input type='text' id='email' />
      <button type='submit'>123</button>
    </form>
  );
}

export default Code;
