import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import NodeRSA from 'node-rsa';
import dotenv from 'dotenv';

dotenv.config();

// Инициализация
const app = express();
app.use(express.json());

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB", error));

// Создание схемы пользователя
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    publicKey: String,
});

const User = mongoose.model('User', UserSchema);

// Создание схемы сообщения
const MessageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    message: String,
});

const Message = mongoose.model('Message', MessageSchema);

// JWT secret
const SECRET = 'SOME_SECRET_KEY';

// Регистрация пользователя
app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const key = new NodeRSA({b: 512});
    const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
        publicKey: key.exportKey('public') // Храним только публичный ключ
    });
    await newUser.save();
    res.json({ privateKey: key.exportKey('private') }); // Возвращаем приватный ключ
});

// Логин пользователя
app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ username: user.username }, SECRET);
        res.json({ token, publicKey: user.publicKey });
    } else {
        res.sendStatus(401);
    }
});

// Получение публичного ключа пользователя
app.get('/publicKey/:username', async (req, res) => {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
        res.json({ publicKey: user.publicKey });
    } else {
        res.sendStatus(404);
    }
});

// Создание сообщения
app.post('/message', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const payload = jwt.verify(token, SECRET);
    const newMessage = new Message({
        sender: payload.username,
        receiver: req.body.receiver,  // добавлено сохранение получателя
        message: req.body.message, // Предполагается, что сообщение уже зашифровано на клиенте
    });
    await newMessage.save();
    res.sendStatus(201);
});

// Получение сообщений
app.get('/messages', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const payload = jwt.verify(token, SECRET);
    const messages = await Message.find({ receiver: payload.username });
    res.json(messages); // Предполагается, что сообщения будут расшифрованы на клиенте
});

app.listen(3000, () => console.log('Server started'));