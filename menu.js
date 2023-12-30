function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯', '✰', '◬', '✵', '✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

function generateMenu(typemenu) {
    const randomSymbol = getRandomSymbol();

    let menuText = `
    module.exports = {
        getMenu: function(pushname, isPremium, botname, devlopernumber) {
            const symbols = ['${randomSymbol}']; // Add more symbols as needed

            let a = db.data.users[m.sender];
            let introText = \`Hello \${pushname}!👋 I'm *𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫*
            
┏────▷ *sᴏᴍᴇ ɪɴғᴏ 4 ʏᴏᴜ* ◁⊰
│ 
│ *✪ ᴜsᴇʀɪɴғᴏ ✪*
│  
│ *✪ ʏᴏᴜʀɴᴀᴍᴇ:* ${pushname}   
│ *✪ ʟɪᴍɪᴛ:* ${a.limit}
│ *✪ ᴘʀᴇᴍɪᴜᴍ:* ${isPremium ? '✅' : '❌'}
│ *✪ ᴛɪᴛʟᴇ:* ${a.title ? a.title : '-'}
│ 
│ *✪ ʙᴏᴛɪɴғᴏ ✪*    
│
│ *✪ᴘʟᴀᴛғᴏʀᴍ: ${os.platform()}     
│ *✪ Sᴛᴀᴛᴜs: Pᴜʙʟɪᴄ*
│ *✪ Lᴀɴɢᴜᴀɢᴇ: Nᴏᴅᴇ.ᴊs*
│ *✪ Bᴀɪʟᴇʏ: @ᴀᴅɪᴡᴀᴊsʜɪɴɢ*
│ *✪ Sᴜᴘᴘᴏʀᴛ: @ᴡʜɪsᴋᴇʏsᴏᴄᴋᴇᴛs*
│ *✪ Bᴏᴛ Nᴀᴍᴇ:* ${botname}
│ *✪ Dᴇᴠᴇʟᴏᴘᴇʀ:* ${devlopernumber}  
│ *✪ ᴛᴏᴛᴀʟᴜsᴇʀ:* ${Object.keys(global.db.data.users).length} ᴜsᴇʀs
│ *✪ ᴛᴏᴛᴀʟᴄʜᴀᴛ:* ${Object.keys(global.db.data.chats).length} ɢʀᴏᴜᴘ/ᴄʜᴀᴛ
${readmore}┗────────────⊰


╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴀɪ*
▮➣ *ᴠᴏɪᴄᴇᴀɪ*
▮➣ *ʙᴜɢ*
▮➣ *ʀᴇᴘᴏʀᴛ*
▮➣ *ɢᴘᴛ*
▮➣ *ᴅᴀʟʟᴇ*
▮➣ *ʀᴇᴍɪɴɪ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴄᴀʟᴄᴜʟᴀᴛᴏʀ*
▮➣ *ᴛᴇᴍᴘᴍᴀɪʟ*
▮➣ *ᴄʜᴇᴄᴋᴍᴀɪʟ*
▮➣ *ɪɴꜰᴏ*
▮➣ *ᴛʀᴛ*
▮➣ *ᴛᴛs*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ʟɪɴᴋɢʀᴏᴜᴘ*
▮➣ *sᴇᴛᴘᴘɢᴄ*
▮➣ *sᴇᴛɴᴀᴍᴇ*
▮➣ *sᴇᴛᴅᴇsᴄ*
▮➣ *ɢʀᴏᴜᴘ*
▮➣ *ɢᴄsᴇᴛᴛɪɴɢ*
▮➣ *ᴡᴇʟᴄᴏᴍᴇ* <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
▮➣ *ʟᴇғᴛ* <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
▮➣ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
▮➣ *sᴇᴛʟᴇғᴛ*
▮➣ *ᴇᴅɪᴛɪɴꜰᴏ*
▮➣ *ᴀᴅᴅ*
▮➣ *ᴋɪᴄᴋ*
▮➣ *ʜɪᴅᴇᴛᴀɢ*
▮➣ *ᴛᴀɢᴀʟʟ*
▮➣ *ᴛᴏᴛᴀɢ*
▮➣ *ᴛᴀɢᴀᴅᴍɪɴ*
▮➣ *ᴀɴᴛɪʟɪɴᴋ*
▮➣ *ᴀɴᴛɪTᴏxɪᴄ*
▮➣ *ᴍᴜᴛᴇ*
▮➣ *ᴘʀᴏᴍᴏᴛᴇ*
▮➣ *ᴅᴇᴍᴏᴛᴇ*
▮➣ *ʀᴇᴠᴏᴋᴇ*
▮➣ *ᴘᴏʟʟ*
▮➣ *ɢᴇᴛʙɪᴏ*
▮➣ *ʀᴇᴠᴏᴋᴇ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴀᴘᴋ*
▮➣ *ʏᴛᴠ*
▮➣ *ʏᴛᴀ*
▮➣ *ɢᴇᴛᴀᴜᴅɪᴏ*
▮➣ *ɢᴇᴛᴠɪᴅᴇᴏ*
▮➣ *ꜰᴀᴄᴇʙᴏᴏᴋ*
▮➣ *ᴍᴇᴅɪᴀꜰɪʀᴇ*
▮➣ *ᴘɪɴᴛᴇʀᴇsᴛᴅʟ*
▮➣ *xɴxxsᴇᴀʀᴄʜ*
▮➣ *xɴxxᴅʟ*
▮➣ *ɢɪᴛᴄʟᴏɴᴇ*
▮➣ *ɢᴅʀɪᴠᴇ*
▮➣ *ɪɴsᴛᴀ*
▮➣ *ʏᴛᴍᴘ3*
▮➣ *ʏᴛᴍᴘ4*
▮➣ *ᴛɪᴋᴛᴏᴋ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴘʟᴀʏ*
▮➣ *ʏᴛs*
▮➣ *ɪᴍᴅʙ*
▮➣ *ɢᴏᴏɢʟᴇ*
▮➣ *ɢɪᴍᴀɢᴇ*
▮➣ *ᴘɪɴᴛᴇʀᴇsᴛ*
▮➣ *ᴡᴀʟʟᴘᴀᴘᴇʀ*
▮➣ *ᴡɪᴋɪᴍᴇᴅɪᴀ*
▮➣ *ʀɪɴɢᴛᴏɴᴇ*
▮➣ *ᴡᴇᴀᴛʜᴇʀ*
▮➣ *ʟʏʀɪᴄs*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭───〈 𝗦𝗧𝗔𝗟𝗞 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ɴᴏᴡᴀ*
▮➣ *ᴛʀᴜᴇᴄᴀʟʟᴇʀ*
▮➣ *ɪɴsᴛᴀsᴛᴀʟᴋ*
▮➣ *ɢɪᴛʜᴜʙsᴛᴀʟᴋ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴅᴇʟᴛᴛᴛ*
▮➣ *ᴛɪᴄᴛᴀᴄᴛᴏᴇ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ʀᴇᴍᴏᴠᴇʙɢ*
▮➣ *sᴛɪᴄᴋᴇʀ*
▮➣ *ᴇᴍᴏᴊɪᴍɪx*
▮➣ *ᴛᴏᴠɪᴅᴇᴏ*
▮➣ *ᴛᴏɢɪꜰ*
▮➣ *ᴛᴏᴜʀʟ*
▮➣ *ᴛᴏᴠɴ*
▮➣ *ᴛᴏᴍᴘ3*
▮➣ *ᴛᴏᴀᴜᴅɪᴏ*
▮➣ *ᴇʙɪɴᴀʀʏ*
▮➣ *ᴅʙɪɴᴀʀʏ*
▮➣ *sᴛʏʟᴇᴛᴇxᴛ*
▮➣ *ꜰᴏɴᴛᴄʜᴀɴɢᴇ*
▮➣ *ꜰᴀɴᴄʏ*
▮➣ *ᴜᴘsᴄᴀʟᴇ*
▮➣ *ʜᴅ*
▮➣ *ᴀᴛᴛᴘ*
▮➣ *ǫᴄ*
▮➣ 
▮➣ *ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴀᴜᴅɪᴏ*
▮➣ *ʙᴀsᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ʙʟᴏᴡɴ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ᴅᴇᴇᴘ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ᴇᴀʀʀᴀᴘᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ғᴀsᴛ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ғᴀᴛ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ɴɪɢʜᴛᴄᴏʀᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ʀᴇᴠᴇʀsᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ʀᴏʙᴏᴛ* _<ᴀᴜᴅɪᴏ>_
▮➣ *sʟᴏᴡ* _<ᴀᴜᴅɪᴏ>_
▮➣ *sᴍᴏᴏᴛʜ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ᴛᴜᴘᴀɪ* _<ᴀᴜᴅɪᴏ>_
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴘɪɴɢ*
▮➣ *ᴀʟɪᴠᴇ*
▮➣ *ᴏᴡɴᴇʀ*
▮➣ *ᴍᴇɴᴜ*
▮➣ *ɪɴꜰᴏᴄʜᴀᴛ*
▮➣ *ǫᴜᴏᴛᴇᴅ*
▮➣ *ʟɪsᴛᴘᴄ*
▮➣ *ʟɪsᴛɢᴄ*
▮➣ *ʟɪsᴛᴏɴʟɪɴᴇ*
▮➣ *ɪɴғᴏʙᴏᴛ*
▮➣ *ʙᴜʏᴘʀᴇᴍɪᴜᴍ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴊᴏɪɴ*
▮➣ *ʟᴇᴀᴠᴇ*
▮➣ *ʙʟᴏᴄᴋ*
▮➣ *ᴜɴʙʟᴏᴄᴋ*
▮➣ *ʙᴄɢʀᴏᴜᴘ*
▮➣ *ʙᴄᴀʟʟ*
▮➣ *sᴇᴛᴘᴘʙᴏᴛ*
▮➣ *sᴇᴛɪᴍɢᴍᴇɴᴜ*
▮➣ *ᴍᴏᴅᴇ*
▮➣ *sᴇᴛᴛɪɴɢ*
▮➣ *sᴇᴛᴍᴇɴᴜ*
▮➣ *sᴇᴛᴇxɪꜰ*
▮➣ *ᴀɴᴛɪᴄᴀʟʟ*
▮➣ *sᴇᴛɴᴀᴍᴇʙᴏᴛ*
▮➣ *ᴀᴅᴅᴘʀᴇᴍ*
▮➣ *ᴅᴇʟᴘʀᴇᴍ*
▮➣ *ʟɪsᴛᴘʀᴇᴍ*
▮➣ *ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
▮➣ *ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ*
▮➣ *ᴀᴜᴛᴏʀᴇᴀᴅ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`

            return introText;
        }
    };
    `;

    return menuText;
}