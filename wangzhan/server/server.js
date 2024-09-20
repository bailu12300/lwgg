const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// 中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

// 路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// 处理联系表单提交
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    // 这里可以添加发送电子邮件或保存到数据库的逻辑
    console.log('收到表单提交:', { name, email, message });
    res.json({ success: true, message: '表单提交成功！' });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});