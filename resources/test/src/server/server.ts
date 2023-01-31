import * as chat from 'chat';

chat.registerCmd('test', (player, args) => {
  chat.send(player, 'test');
});
