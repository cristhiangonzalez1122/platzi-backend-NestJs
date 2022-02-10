import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(): string {
    return 'hola';
  }
  @Get('filter')
  getBrandFilter() {
    return 'yo soy un filter';
  }
}
