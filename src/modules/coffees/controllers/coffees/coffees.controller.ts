import { PaginationQueryDto } from './../../../../common/dto/pagination-query.dto';
import { CoffeesService } from './../../services/coffees/coffees.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateCoffeeDto } from '../../dto/create-coffee-dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // const { limit, offset } = paginationQuery;
    return this.coffeeService.getAllCoffee(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') coffeeId: number) {
    return this.coffeeService.getCoffeeById(`${coffeeId}`);
  }

  @Post()
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeeService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
