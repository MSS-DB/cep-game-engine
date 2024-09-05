export class CreateGameResultRequest {
  gameInstanceCode: string;
  gameStartDate: Date;
  gameEndDate: Date;
  gamerId: string;
  gamerIdType: string;
  result: string;
  comment: string;
}
