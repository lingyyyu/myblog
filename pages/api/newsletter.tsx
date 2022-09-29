import { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../helpers/db-util";

type Data = {
    message: string,
}

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }
        //console.log(userEmail);

        const c = connectDatabase()

        c.query(`insert into user (email) values (?)`,[userEmail],(err,r)=>{
            //err可能产生的错误
            if(err){
                throw err
            }
            //r成功的结果
            if(r.affectedRows===0){
                //console.log('插入失败')
                res.status(422).json({ message: 'can not Signed up!' });
            }
            else{
                //console.log('插入成功')
                res.status(201).json({ message: 'Signed up!' });
            }
        })
        
        c.end();
        
    }
}

export default handler;