//如果库没有声明文件解决方案
//1.npm i --save-dev @types/express使用“@types/packname”安装库的声明文件（如果存在）
//2.添加一个包含 `declare module 'express';` 的新声明(.d.ts)文件(手写)
import axios from "axios"
import express from 'express'

const app = express()

const router = express.Router()

app.use('/api',router)

router.get('/api', (req: any, res: any) => {
    res.json({
        code: 200
    })
})

app.listen(9001, () => {
    console.log('9001')
})