import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../helpers/db-util";

type commentType = {
    email: string,
    name: string,
    text: string,
    eventId: string | string[]
}

function handler(req: NextApiRequest, res: NextApiResponse) {
    const eventId = req.query.eventId;

    const c = connectDatabase()

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        //验证邮箱地址格式
        if (
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newComment: commentType = {
            email,
            name,
            text,
            eventId,
        };

        //console.log(newComment);
        c.query(`insert into comments (email,name,text,eventId) values (?,?,?,?)`,[newComment.email,newComment.name,newComment.text,newComment.eventId],(err,r)=>{
            //err可能产生的错误
            if(err){
                throw err
            }
            //r成功的结果
            if(r.affectedRows===0){
                //console.log('插入失败')
                res.status(422).json({ message: 'can not Comment!' });
            }
            else{
                //console.log('插入成功')
                res.status(201).json({ message: 'Comment success!', comment: newComment });
            }
        })
    }

    if (req.method === 'GET') {
        // const dummyList = [
        //     { id: 'c1', name: 'Max', text: 'A first comment!' },
        //     { id: 'c2', name: 'Manuel', text: 'A second comment!' },
        // ];

        c.query(`select name,text,id from comments where eventId=?`,[eventId],(err,r)=>{
            //err可能产生的错误
            if(err){
                throw err
            }
            else res.status(200).json({ comments: r });
        })

    }

    c.end()
}

export default handler;