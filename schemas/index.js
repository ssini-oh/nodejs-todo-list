// schemas/index.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// .env 파일 로드
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'todo_memo', // todo_memo 데이터베이스명을 사용합니다.
    })
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

// 서비스 중에 에러 발생 시
mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err);
});

export default connect;
