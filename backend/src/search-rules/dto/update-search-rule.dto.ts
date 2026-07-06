import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateSearchRuleDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  keyword?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
