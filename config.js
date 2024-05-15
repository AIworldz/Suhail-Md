const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_12_05_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKc3B1QUNUM3lyNGNJWEs4YlEyWkNYbDNLU0lQMHBMOU1URldsZ0EwS3dvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwODg5MTIwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTJDNzA3QzVFNzI4NDA5Qjg4M0VCNzQzQUFBRUZBOERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1ODAzOTQzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDA4ODkxMjAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGODJEOUZDOTFCRjk1QTQ2NjAwNkM0OEI1QTUyRTlDQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU4MDM5NDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQmU3eG0tTWpRcXFwejhJOE1iRkRzUVwiLFxuICBcInBob25lSWRcIjogXCJhMjFlY2JmYi1iOTE5LTRjNzAtYmJhNC0wZjg4ZWQyNGNjNGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICA2NixcbiAgICAgIDU5LFxuICAgICAgMjIwLFxuICAgICAgMjU1LFxuICAgICAgMTI0LFxuICAgICAgMTM1LFxuICAgICAgMTA0LFxuICAgICAgMjA3LFxuICAgICAgODIsXG4gICAgICA5NixcbiAgICAgIDI0NixcbiAgICAgIDEwMSxcbiAgICAgIDExNyxcbiAgICAgIDg1LFxuICAgICAgMjA1LFxuICAgICAgMjQsXG4gICAgICAxNDcsXG4gICAgICAxNTYsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMCxcbiAgICAgIDEzMSxcbiAgICAgIDQ2LFxuICAgICAgMTc5LFxuICAgICAgMTM1LFxuICAgICAgMTA5LFxuICAgICAgNSxcbiAgICAgIDE3MixcbiAgICAgIDcsXG4gICAgICAxNzksXG4gICAgICAxMzEsXG4gICAgICA5NSxcbiAgICAgIDQ2LFxuICAgICAgNyxcbiAgICAgIDI1MSxcbiAgICAgIDEwOSxcbiAgICAgIDEzMixcbiAgICAgIDExOCxcbiAgICAgIDE5LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPNjR0WWNGRUtLdWxMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlVUUx4NWM5d3hvSzhXNTFjTGZIQ0lOYnhlYnhKcU1TWk1RTW05RVpaRUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidU1udXoyMzhsODFRbFh2L1lkS3ZHU0NGaFcyM0RUOWQrWUV1K2s1dDAvMVhWU3huL1pnZ3FqZkJlK1VNTlVCcXRwNFhhVkFNZWZuQ3o4aHVqSHZMRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidmNqOXVOSWw4VFBQZ0txeThJbkdjZklHR3FUNit5dWkvZFFQSitKNk8zN1Y0MW0vS3RjS3h2SlR0dXVZTEh2bmM3clE4V2RSSHlINE01V09RWmc1Q0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDg4OTEyMDE6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDk1MzA5NTQxNDMyOjIwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFzc2lzdGFudFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDA4ODkxMjAxOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU4MDM5NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNa3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1rcS5qc29uIjogIntcImtleURhdGFcIjpcImRyKzF6MEhWQUUwTThVdGc1UGNpQlFCczQzRkFZQUhORWNHams1Z1lDZ289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1NzczMjk3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1ODAzOTQyMzk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
