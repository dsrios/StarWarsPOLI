//Componente forms por si se llega a consumir los mòdulos a nivel general David Orozco

import { TestBed, inject } from '@angular/core/testing';

import { FormComponentService } from './form-component.service';

describe('FormComponentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FormComponentService]
        });
    });

});
