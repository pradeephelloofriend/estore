import nodemailer from 'nodemailer'
import {google} from 'googleapis'
import { activateEmailTemplate } from '@/email/activateEmailTemplate'
//const {OAuth2}=google.auth
const OAuth2 = google.auth.OAuth2;
const OAUTH_PLAYGROUND="https://developers.google.com/oauthplayground"

const {MAIL_CLIENT_ID,MAIL_SECRET_ID,MAIL_REFRESH_TOKEN,SENDER_MAIL_ADDRESS}=process.env

const oauth2Client=new OAuth2(
    MAIL_CLIENT_ID,
    MAIL_SECRET_ID,
    MAIL_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)


export const sendEmail=  async (to,url,txt,subject,template)=>{
    oauth2Client.setCredentials({
        refresh_token:MAIL_REFRESH_TOKEN
    })
    const accessToken=oauth2Client.getAccessToken()
    const authObject = {
        service:'gmail',
            auth:{
                type:"OAUth2",
                user:SENDER_MAIL_ADDRESS,
                clientId:MAIL_CLIENT_ID,
                clientSecret:MAIL_SECRET_ID,
                refreshToken:MAIL_REFRESH_TOKEN,
                accessToken
            },
            tls: {
                rejectUnauthorized: false
            }
    }
    //const accessToken=result.res.data.access_token
    const smtpTransport=nodemailer.createTransport(authObject)
    /*const smtpTransport=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "pradeephellofriend@gmail.com", // generated ethereal user
            pass: "urmyfriend", // generated ethereal password
        },
    })*/
    //console.log('accessToken',smtpTransport)
    const mailOptions={
        from:SENDER_MAIL_ADDRESS,
        to:to,
        subject:subject,
        html:template(to,url)

    }
    //smtpTransport.sendMail()
    console.log('accessToken',mailOptions)
    smtpTransport.sendMail(mailOptions,(err,infos)=>{
        if(err) return err;
        return infos;
    });
    
}