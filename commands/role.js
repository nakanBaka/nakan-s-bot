exports.run = async (client, message, args, level) => {
    var user = message.mentions.members.first(); //User
    var roleName = args.splice(2).join(' '); //Role Name
    var role = message.guild.roles.find('name', roleName); //Role Search


    switch (args[0]) {
        case 'add':
        if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("Desculpe mas você não possui permissão para adicionar cargos.");    
        if (!user) return message.reply('Você precisa mencionar um usuário válido deste servidor'); // I need User
           //I need roleName
            if (!message.guild.roles.find('name', roleName)) return message.reply('Nenhum cargo com este nome existe. _Os nomes de cargos fazem distinção entre letras maiúsculas e minúsculas_');
            if (user.roles.exists('name', roleName)) return message.reply('O usuário já possui este cargo!'); //Already have role


            user.addRole(role).then(() => message.reply('Cargo adicionado')).catch((err) => message.reply('Não é possível adicionar cargo').then(() => console.log(err)));
            break;
        case 'remove':
        if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("Desculpe mas você não possui permissão para remover cargos.")
            if (!user) return message.reply('Você precisa mencionar um usuário válido deste servidor');
            //console.log(user);
            //console.log(roleName);
            if (!message.guild.roles.find('name', roleName)) return message.reply('Nenhum cargo com este nome existe. _Os nomes de cargos fazem distinção entre letras maiúsculas e minúsculas._');

            if (!user.roles.find('name', roleName)) return message.reply('Esse usuário ainda tem o cargo?');

            user.removeRole(role).then(() => message.reply('Cargo removido')).catch((err) => message.reply('Não é possível remover o cargo').then(() => console.log(err)));
            break;
        default:
            message.reply('Bem, você pode adicionar ou remover cargos... **d.role add**, para adicionar cargos ou **d.role remove**, para tirar cargos.');
    }}
