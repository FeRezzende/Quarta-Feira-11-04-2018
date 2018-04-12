import { TestBed, inject } from '@angular/core/testing';

import { CadastroClientesService } from './cadastro-clientes.service';

describe('CadastroClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroClientesService]
    });
  });

  it('should be created', inject([CadastroClientesService], (service: CadastroClientesService) => {
    expect(service).toBeTruthy();
  }));
});
