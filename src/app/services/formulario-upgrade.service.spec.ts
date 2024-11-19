import { TestBed } from '@angular/core/testing';

import { FormularioUpgradeService } from './formulario-upgrade.service';

describe('FormularioUpgradeService', () => {
  let service: FormularioUpgradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioUpgradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
