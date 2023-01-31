import * as alt from 'alt-server';
import * as chat from 'chat';

chat.registerCmd('test', (player: alt.Player, args: string[]) => {
  chat.send(player, 'test');
});
