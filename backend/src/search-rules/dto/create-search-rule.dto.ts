import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSearchRuleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  keyword: string;
}
