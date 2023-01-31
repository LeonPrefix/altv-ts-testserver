declare module 'chat' {
  import { Player } from 'alt-server';
  export function registerCmd(cmd: string, callback: (player: Player, args: string[]) => void): void;
  export function send(player: Player, message: string): void;
}
