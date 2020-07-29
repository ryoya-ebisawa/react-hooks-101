import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fulid">
      <h4>イベント作成フォーム</h4>
      <form action="">
        <div className="form-group">
          <label htmlFor="forEventTitle">タイトル</label>
          <input className="form-control" id="forEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="forEventBody">ボディ</label>
          <textarea className="form-control" id="forEventBody" />
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
